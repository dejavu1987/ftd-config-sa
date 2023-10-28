import { FC, useState } from 'react';
import { actionTree, Subitem } from '../Data';

// react function component
export const ActionField: FC<{ actionId: number }> = ({ actionId }) => {
  const [action, setAction] = useState<string>('');
  const [valOptions, setvalOptions] = useState<Subitem[]>([]);
  const [actionVal, setActionVal] = useState<string>('');
  return (
    <>
      <h3>Action {actionId}</h3>
      <div className="action-fields">
        <select
          value={action}
          onChange={(e) => {
            setAction(e.target.value);
            const options = actionTree.filter(
              ({ value }) => value === e.target.value
            )[0].subitems;

            setvalOptions(options);
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
