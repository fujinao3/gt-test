import { ChangeEventHandler, useEffect, useState } from 'react';
import { fetcher } from '../utils/fetcher';

const WIKI_TOP_COUNTRY_API =
  import.meta.env.VITE_WIKI_API +
  'top-by-country/all-projects/all-access/2022/05';

interface LocaleSelectorProps {
  select: string;
  onChange?: ChangeEventHandler<HTMLSelectElement>;
}

export const LocaleSelector = ({ select, onChange }: LocaleSelectorProps) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const locales = await fetcher(WIKI_TOP_COUNTRY_API);

        setOptions(locales.items[0].countries);
      } catch (error) {
        //
      }
    };

    fetchData();
  }, []);

  return (
    <select
      onChange={onChange}
      className="selector"
      aria-label="Select the number of result to display"
    >
      {options.map(({ country }, key) => {
        return (
          <option key={key} value={country} selected={country === select}>
            {country}
          </option>
        );
      })}
    </select>
  );
};
