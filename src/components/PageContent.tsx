import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Action, actions as defaultActions, mdIcoUrl } from '../Data';
import ActionForm from './ActionForm';
import { useGeneralSettings } from '../hooks/UseGeneralSettings';
import { sendConfig } from './sendConfig';

export const PageContent: FC = () => {
  const { settings } = useGeneralSettings();
  const { pageName, pageIndex: pageIdx } = useParams();
  const pageIndex = pageIdx ? parseInt(pageIdx) : null;
  const [selectedAction, setSelectedAction] = useState<Action | null>(null);
  const [selectedActionIndex, setSelectedActionIndex] = useState<number | null>(
    null
  );
  const [actionIsOpen, setActionIsOpen] = useState<boolean>(false);

  const [actions, setActions] = useState<Action[][]>(defaultActions);

  // Load actions from local storage on component mount
  useEffect(() => {
    const savedactions = localStorage.getItem('ftd.actions');

    if (savedactions) {
      setActions(JSON.parse(savedactions));
    } else {
      // If no actions found in local storage, use defaultactions from Data.ts
      setActions(defaultActions);
    }
  }, []);

  const savePage = async (pageIndex: number) => {
    console.log('Save');
    const formData = new FormData();
    formData.append('save', `menu${pageIndex + 1}`);
    actions[pageIndex].forEach((item, index) => {
      formData.append(`screen${pageIndex + 1}logo${index}`, `${item.icon}.bmp`);
      formData.append(
        `screen${pageIndex + 1}latchlogo${index}`,
        item.latchIcon || '---'
      );
      for (let i = 0; i < 3; i++) {
        formData.append(
          `screen${pageIndex + 1}button${index}action${i}`,
          item.actions[i] ? item.actions[i][0] : '0'
        );
        formData.append(
          `screen${pageIndex + 1}button${index}value${i}`,
          item.actions[i] ? item.actions[i][1] : '0'
        );
      }
    });
    // @ts-expect-error This their bug
    const body = new URLSearchParams(formData).toString();
    await sendConfig(body);
  };

  if (pageIndex === null) return;
  return (
    <section>
      <h2>{pageName}</h2>
      <div
        className="icon-grid icon-grid--action"
        style={{ backgroundColor: settings.background }}
      >
        {actions[pageIndex].map((action, index) => (
          <div
            className="icon"
            key={index}
            onClick={() => {
              setActionIsOpen(true);
              setSelectedAction(action);
              setSelectedActionIndex(index);
            }}
            style={{ backgroundColor: settings.functionbuttoncolor }}
          >
            <img src={`${mdIcoUrl}${action.icon}.svg`} alt={action.name} />
            <p>{action.name}</p>
          </div>
        ))}
        <div
          className="icon"
          onClick={() => {
            savePage(pageIndex);
          }}
        >
          <img src={`${mdIcoUrl}floppy.svg`} alt="Home" />
          <p>Save</p>
        </div>
      </div>

      {selectedAction &&
        actionIsOpen &&
        selectedActionIndex !== null &&
        selectedActionIndex > -1 && (
          <ActionForm
            page={pageName || ''}
            isOpen={actionIsOpen}
            inputAction={selectedAction}
            onClose={(formState) => {
              setActionIsOpen(false);
              if (formState) {
                const newActions = [...actions];
                newActions[pageIndex][selectedActionIndex] = formState;
                setActions(newActions);
                localStorage.setItem('ftd.actions', JSON.stringify(newActions));
              }
            }}
          />
        )}
    </section>
  );
};
