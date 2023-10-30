import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Action,
  actions as defaultActions,
  ftdSaveConfigUrl,
  mdIcoUrl,
} from '../Data';
import ActionForm from './ActionForm';

export const PageContent: FC = () => {
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

  if (pageIndex === null) return;
  return (
    <section>
      <h2>{pageName}</h2>
      <div className="grid grid--action">
        {actions[pageIndex].map((action, index) => (
          <div
            className="action icon"
            key={index}
            onClick={() => {
              setActionIsOpen(true);
              setSelectedAction(action);
              setSelectedActionIndex(index);
            }}
          >
            <img src={`${mdIcoUrl}${action.icon}.svg`} alt={action.name} />
            <p>{action.name}</p>
          </div>
        ))}
        <div
          className="action icon"
          onClick={async () => {
            console.log('Save');
            const formData = new FormData();
            formData.append('save', `menu${pageIndex + 1}`);
            formData.append('actions', JSON.stringify(actions[pageIndex]));
            await fetch(ftdSaveConfigUrl, {
              method: 'POST',
              body: formData,
            });
          }}
        >
          <img src={`${mdIcoUrl}floppy.svg`} alt="Save" />
          <p>Save</p>
        </div>
      </div>

      {selectedAction &&
        actionIsOpen &&
        selectedActionIndex !== null &&
        selectedActionIndex > -1 && (
          <ActionForm
            isOpen={actionIsOpen}
            inputAction={selectedAction}
            onClose={(formState) => {
              setActionIsOpen(false);
              console.log('closed');
              if (formState) {
                console.log('pageIndex');
                console.log(pageIndex);
                console.log(selectedActionIndex);
                console.log(formState);
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
