import React, { useState } from 'react';

import './ActionForm.css';
import { ActionField } from './ActionField';
import IconDropdown from './IconDropdown';
import { icons } from '../Data';

interface ActionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ActionForm: React.FC<ActionFormProps> = ({ isOpen, onClose }) => {
  const [selectedIcon, setSelectedIcon] = useState<string>('play');

  const [isLatchEnabled, setIsLatchEnabled] = useState<boolean>(false);
  const [selectedLatchIcon, setSelectedLatchIcon] = useState<string>('');

  // You can define an array of material design icons for the selection in Section 1.
  const materialDesignIcons: string[] = ['icon1', 'icon2'];

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
        <h2>Action Configuration</h2>
        <form onSubmit={handleSubmit}>
          <section className="section">
            <IconDropdown
              options={icons}
              value={selectedIcon}
              onChange={(newIcon) => setSelectedIcon(newIcon)}
            />
          </section>
          <section className="section ">
            <ActionField actionId={1} />
            <ActionField actionId={2} />
            <ActionField actionId={3} />
          </section>

          <section className="section">
            {/* Section 4: Latch Configuration */}
            <label>
              <input
                type="checkbox"
                checked={isLatchEnabled}
                onChange={(e) => setIsLatchEnabled(e.target.checked)}
              />{' '}
              Latch{' '}
            </label>
            <select
              value={selectedLatchIcon}
              onChange={(e) => setSelectedLatchIcon(e.target.value)}
            >
              {materialDesignIcons.map((icon, index) => (
                <option key={index} value={icon}>
                  {icon}
                </option>
              ))}
            </select>
          </section>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default ActionForm;
