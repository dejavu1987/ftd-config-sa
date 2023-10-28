import React, { useState } from 'react';

import './ActionForm.css';

interface ActionFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const ActionForm: React.FC<ActionFormProps> = ({ isOpen, onClose }) => {
  const [selectedIcon, setSelectedIcon] = useState<string>('');
  const [action1, setAction1] = useState<string>('');
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
            {/* Section 1: Icon Selection */}
            <select
              value={selectedIcon}
              onChange={(e) => setSelectedIcon(e.target.value)}
            >
              {materialDesignIcons.map((icon, index) => (
                <option key={index} value={icon}>
                  {icon}
                </option>
              ))}
            </select>
          </section>
          <section className="section ">
            <h3>Action 1</h3>
            <div className="action-fields">
              <select
                value={action1}
                onChange={(e) => setAction1(e.target.value)}
              >
                <option value="0">Do Nothing</option>
                <option value="1">Delay</option>
                <option value="2">Arrows and TAB</option>
                <option value="3">Mediakey</option>
                <option value="4">Letters</option>
                <option value="5">Option Keys</option>
                <option value="6">Function Keys</option>
                <option value="7">Numbers</option>
                <option value="8">Special Chars</option>
                <option value="9">Combos</option>
                <option value="10">Helpers</option>
                <option value="11">FTD Functions</option>
                <option value="12">Numpad</option>
                <option value="13">User Actions</option>
              </select>
              <select>
                {/* Add options related to the selected action */}
              </select>
            </div>
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
