import { FC, useEffect, useState } from 'react';
import { ActionTuple, Subitem, getOptionsForAction } from '../Data';

import './ActionField.css';

// react function component
export const ActionField: FC<{
  actionId: number;
  actionTuple: ActionTuple;
  onChange: (actionTuple: ActionTuple) => void;
}> = ({ actionId, actionTuple, onChange }) => {
  const [action, setAction] = useState<string>(actionTuple[0]);
  const [valOptions, setvalOptions] = useState<Subitem[]>([]);
  const [actionVal, setActionVal] = useState<string>(actionTuple[1]);

  useEffect(() => {
    const options = getOptionsForAction(actionTuple[0]);
    setvalOptions(options);
  }, [actionTuple]);
  return (
    <>
      <div className="action-field">
        <h3>
          <label htmlFor={`action-select-${actionId}`}>Action {actionId}</label>
        </h3>
        <select
          value={action}
          onChange={(e) => {
            setAction(e.target.value);
            const options = getOptionsForAction(e.target.value);
            setvalOptions(options);
            onChange([e.target.value, actionVal]);
          }}
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
        <select
          value={actionVal}
          onChange={(e) => {
            setActionVal(e.target.value);
            onChange([action, e.target.value]);
          }}
        >
          {valOptions.map(({ value, name }) => (
            <option key={name} value={value}>
              {name}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
