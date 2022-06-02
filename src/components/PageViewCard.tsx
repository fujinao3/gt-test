import { EyeIcon } from '../components/Icons/EyeIcon';
import { RankIcon } from '../components/Icons/RankIcon';
import { ArticleType } from '../pages/PageView';

export const PageViewCard = ({ article, rank, views_ceil }: ArticleType) => {
  return (
    <div className="mb-4 block rounded-lg bg-white p-6 shadow-lg">
      <h2 className="text-l mb-4 font-bold text-gray-900">{article}</h2>
      <div className="flex flex-row flex-wrap items-center text-base text-gray-600">
        <div className="mr-10 flex items-center">
          <div className="pr-2">
            <RankIcon />
          </div>
          {rank}
        </div>
        <div className="flex items-center">
          <div className="pr-2">
            <EyeIcon />
          </div>{' '}
          {views_ceil}{' '}
        </div>
      </div>
    </div>
  );
};
