import React, { useEffect, useState } from 'react';

import './ActionForm.css';
import { ActionField } from './ActionField';
import IconDropdown from './IconDropdown';
import { Action, ActionTuple, icons as defaultIcons } from '../Data';

interface ActionFormProps {
  isOpen: boolean;
  onClose: (formState: Action | null) => void;
  inputAction: Action;
}

const ActionForm: React.FC<ActionFormProps> = ({
  isOpen,
  onClose,
  inputAction,
}) => {
  const [icon, setIcon] = useState<string>(inputAction.icon);
  const [icons, setIcons] = useState<string[]>([]);
  const [latchIcon, setLatchIcon] = useState<string | undefined>(
    inputAction.icon
  );
  const [actions, setactions] = useState<ActionTuple[]>(inputAction.actions);
  const [latch, setLatch] = useState<boolean>(!!inputAction.latch);

  // Load icons from local storage on component mount
  useEffect(() => {
    const savedIcons = localStorage.getItem('ftd.icons');

    if (savedIcons) {
      setIcons(JSON.parse(savedIcons));
    } else {
      // If no icons found in local storage, use defaultIcons from Data.ts
      setIcons(defaultIcons);
    }

    setactions(inputAction.actions);
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
        <h2>Action Configuration:</h2>
        <h3>{inputAction.name}</h3>
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
                actionId={index}
                actionTuple={action}
                onChange={(tuple) => {
                  actions[index] = tuple;
                  setactions(actions);
                }}
              />
            ))}
            {actions.length < 3 && (
              <button
                type="button"
                onClick={() => {
                  if (actions.length < 3) setactions([...actions, ['0', '0']]);
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
                checked={latch}
                onChange={(e) => setLatch(e.target.checked)}
              />
              Latch
            </label>
            {latch && (
              <>
                <label htmlFor="">Latch icon</label>
                <IconDropdown
                  options={icons}
                  value={latchIcon}
                  onChange={(newIcon) => setLatchIcon(newIcon)}
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
