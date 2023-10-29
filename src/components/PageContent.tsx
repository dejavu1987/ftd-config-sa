import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Action, actions, mdIcoUrl } from '../Data';
import ActionForm from './ActionForm';

export const PageContent: FC = () => {
  const { pageName, pageIndex } = useParams();
  const [selectedAction, setSelectedAction] = useState<Action | null>(null);
  const [selectedActionIndex, setSelectedActionIndex] = useState<number | null>(
    null
  );
  const [actionIsOpen, setActionIsOpen] = useState<boolean>(false);
  if (!pageIndex) return;
  return (
    <section>
      <h2>{pageName}</h2>
      <div className="grid grid--action">
        {actions[parseInt(pageIndex)].map((action, index) => (
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
          onClick={() => {
            console.log('Save');
          }}
        >
          <img src={`${mdIcoUrl}floppy.svg`} alt="Save" />
          <p>Save</p>
        </div>
      </div>

      {selectedAction && (
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
            }
          }}
        />
      )}
    </section>
  );
};
