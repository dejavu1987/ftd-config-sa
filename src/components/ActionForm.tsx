import React, { useEffect, useState } from 'react';

import './ActionForm.css';
import { ActionField } from './ActionField';
import IconDropdown from './IconDropdown';
import { Action, ActionTuple, icons as defaultIcons } from '../Data';

interface ActionFormProps {
  isOpen: boolean;
  onClose: (formState: Action | null) => void;
  inputAction: Action;
  page: string;
}

const ActionForm: React.FC<ActionFormProps> = ({
  isOpen,
  onClose,
  inputAction,
  page,
}) => {
  const [icon, setIcon] = useState<string>(inputAction.icon);
  const [icons, setIcons] = useState<string[]>([]);
  const [latchIcon, setLatchIcon] = useState<string | undefined>(
    inputAction.icon
  );
  const [actions, setActions] = useState<ActionTuple[]>(inputAction.actions);
  const [latch, setLatch] = useState<boolean>(!!inputAction.latch);

  // Load icons from local storage on component mount
  useEffect(() => {
    console.log('inputAction');
    console.log(inputAction);

    const savedIcons = localStorage.getItem('ftd.icons');

    if (savedIcons) {
      setIcons(JSON.parse(savedIcons));
    } else {
      // If no icons found in local storage, use defaultIcons from Data.ts
      setIcons(defaultIcons);
    }

    setActions(inputAction.actions);
    setIcon(inputAction.icon);
    setLatch(!!inputAction.latch);
    setLatchIcon(inputAction.latchIcon);
  }, [inputAction]);
  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onClose({
      name: inputAction.name,
      icon,
      actions,
      latch,
      latchIcon,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={() => onClose(null)}>
          &times;
        </span>
        <h2>
          {page} / {inputAction.name}
        </h2>
        <form onSubmit={handleSubmit}>
          <section className="section">
            <IconDropdown
              options={icons}
              value={icon}
              onChange={(newIcon) => setIcon(newIcon)}
            />
          </section>
          <section className="section ">
            {actions.map((action, index) => (
              <ActionField
                key={index}
                actionId={index}
                actionTuple={action}
                onChange={(tuple) => {
                  actions[index] = tuple;
                  setActions(actions);
                }}
              />
            ))}
            {actions.length < 3 && (
              <button
                className="button button--secondary"
                type="button"
                onClick={() => {
                  if (actions.length < 3) setActions([...actions, ['0', '0']]);
                }}
              >
                Add Action
              </button>
            )}
          </section>

          <section className="section">
            {/* Section 4: Latch Configuration */}
            <div className="form-field">
              <label htmlFor="latch">Latch</label>
              <input
                id="latch"
                type="checkbox"
                checked={latch}
                onChange={(e) => setLatch(e.target.checked)}
              />
            </div>

            {latch && (
              <>
                <IconDropdown
                  options={icons}
                  value={latchIcon}
                  onChange={(newIcon) => setLatchIcon(newIcon)}
                />
              </>
            )}
          </section>
          <button className="button button--primary" type="submit">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default ActionForm;
