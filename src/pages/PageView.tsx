import { useEffect, useState } from 'react';
import { fetcher } from '../utils/fetcher';
import { ResultsSelector } from '../components/ResultsSelector';
import { formatDate, getYesterday } from '../utils/dates';
import { LocaleSelector } from '../components/LocaleSelector';
import { PageViewCard } from '../components/PageViewCard';
import { DateSelector } from '../components/DateSelector/DateSelector';

export interface ArticleType {
  article: string;
  rank: number;
  views_ceil: number;
}

interface PVDataType {
  items: {
    articles: ArticleType[];
  }[];
}

const buildUrl = (date: Date, country: string) => {
  return (
    import.meta.env.VITE_WIKI_API +
    'top-per-country/' +
    country +
    '/all-access/' +
    formatDate(date)
  );
};

export const PageView = () => {
  // Store date
  const [pageDate, setPageDate] = useState(getYesterday());
  // Store selected option
  const [resultOption, setResultOption] = useState(100);
  // Store country
  const [country, setCountry] = useState('US');
  // Store result
  const [pvData, setPvData] = useState<PVDataType>();

  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pageDetailData = await fetcher(buildUrl(pageDate, country));
        setPvData(pageDetailData);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };

    fetchData();
  }, [country, pageDate]);

  return (
    <div className="container mx-auto">
      <div className="flex flex-row flex-wrap py-4">
        <aside className="w-full px-2 sm:w-full md:w-1/4">
          <form className="sticky top-0 w-full pr-4">
            <h1 className="mb-10 text-xl font-bold">
              Most Viewed Pages in Wikipedia
            </h1>
            <div className="mb-4">
              <label className="mb-2 font-semibold">Date:</label>
              <DateSelector
                date={pageDate}
                onChange={(date: Date) => {
                  setPageDate(date);
                }}
              />
            </div>
            <div className="mb-4">
              <label className="mb-2 font-semibold">Per Country:</label>
              <LocaleSelector
                select={country}
                onChange={(e) => setCountry(e.currentTarget.value)}
              ></LocaleSelector>
            </div>
            <div className="mb-10">
              <label className="mb-2 font-semibold">Number of Results:</label>
              <ResultsSelector
                select={resultOption}
                onChange={(e) =>
                  setResultOption(parseInt(e.currentTarget.value))
                }
              ></ResultsSelector>
            </div>
          </form>
        </aside>
        <main role="main" className="w-full px-2 pt-1 sm:w-2/3 md:w-3/4">
          {pvData && pvData.items
            ? pvData.items[0].articles
                .slice(0, resultOption)
                .map((value: ArticleType, key: number) => {
                  return <PageViewCard key={key} {...value} />;
                })
            : 'NO RESULTS'}
          {error && 'Something went wrong'}
        </main>
      </div>
    </div>
  );
};
