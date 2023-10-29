import { FC, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Action, mdIcoUrl } from '../Data';
import ActionForm from './ActionForm';

interface PageContentProps {
  actions: Action[];
}

export const PageContent: FC<PageContentProps> = ({ actions }) => {
  const { pageName } = useParams();

  const [actionIsOpen, setActionIsOpen] = useState<boolean>(false);
  return (
    <section>
      <h2>{pageName}</h2>
      <div className="grid grid--action">
        {actions.map((action, index) => (
          <div
            className="action icon"
            key={index}
            onClick={() => {
              setActionIsOpen(true);
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

      <ActionForm
        isOpen={actionIsOpen}
        onClose={() => {
          setActionIsOpen(false);
          console.log('closed');
        }}
      />
    </section>
  );
};
