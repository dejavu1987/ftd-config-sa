import React, { useEffect, useState } from 'react';

import './ActionForm.css';
import { ActionField } from './ActionField';
import IconDropdown from './IconDropdown';
import { Action, ActionTuple, icons as defaultIcons } from '../Data';

interface ActionFormProps {
  isOpen: boolean;
  onClose: () => void;
  selectedAction: Action;
}

const ActionForm: React.FC<ActionFormProps> = ({
  isOpen,
  onClose,
  selectedAction,
}) => {
  const [selectedIcon, setSelectedIcon] = useState<string>(selectedAction.icon);
  const [selectedLatchIcon, setSelectedLatchIcon] = useState<string>(
    selectedAction.icon
  );
  const [selectedActions, setSelectedActions] = useState<ActionTuple[]>(
    selectedAction.actions
  );

  const [isLatchEnabled, setIsLatchEnabled] = useState<boolean>(false);

  const [icons, setIcons] = useState<string[]>([]);

  // Load icons from local storage on component mount
  useEffect(() => {
    const savedIcons = localStorage.getItem('ftd.icons');

    console.log(selectedAction);

    if (savedIcons) {
      setIcons(JSON.parse(savedIcons));
    } else {
      // If no icons found in local storage, use defaultIcons from Data.ts
      setIcons(defaultIcons);
    }
  }, []);
  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Action Configuration:</h2>
        <h3>{selectedAction.name}</h3>
        <form onSubmit={handleSubmit}>
          <section className="section">
            <IconDropdown
              options={icons}
              value={selectedIcon}
              onChange={(newIcon) => setSelectedIcon(newIcon)}
            />
          </section>
          <section className="section ">
            {selectedActions.map((action, index) => (
              <ActionField
                actionId={index}
                actionTuple={action}
                onChange={(tuple) => {
                  selectedActions[index] = tuple;
                  setSelectedActions(selectedActions);
                }}
              />
            ))}
            {selectedActions.length < 3 && (
              <button
                type="button"
                onClick={() => {
                  if (selectedActions.length < 3)
                    setSelectedActions([...selectedActions, ['0', '0']]);
                }}
              >
                Add Action
              </button>
            )}
          </section>

          <section className="section">
            {/* Section 4: Latch Configuration */}
            <label>
              <input
                type="checkbox"
                checked={isLatchEnabled}
                onChange={(e) => setIsLatchEnabled(e.target.checked)}
              />
              Latch
            </label>
            {isLatchEnabled && (
              <>
                <label htmlFor="">Latch icon</label>
                <IconDropdown
                  options={icons}
                  value={selectedLatchIcon}
                  onChange={(newIcon) => setSelectedLatchIcon(newIcon)}
                />
              </>
            )}
          </section>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ActionForm;
