import { ChangeEventHandler } from 'react';

interface ResultsSelectorProps {
  select: number;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export const ResultsSelector = ({ select, onChange }: ResultsSelectorProps) => {
  const RESULT_OPTIONS = [25, 50, 75, 100, 200];

  return (
    <select
      onChange={onChange}
      className="selector"
      aria-label="Select the number of result to display"
    >
      {RESULT_OPTIONS.map((val, key) => {
        return (
          <option key={key} value={val} selected={val === select}>
            {val}
          </option>
        );
      })}
    </select>
  );
};
