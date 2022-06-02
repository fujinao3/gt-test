import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DateSelector.css';

interface DateSeletorProps {
  date: Date;
  onChange(
    date: Date | null,
    event: React.SyntheticEvent<any> | undefined
  ): void;
}

export const DateSelector = ({ date, onChange }: DateSeletorProps) => {
  return <DatePicker selected={date} onChange={onChange} />;
};
