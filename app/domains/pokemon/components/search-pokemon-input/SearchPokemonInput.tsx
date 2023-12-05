import { RiSearchLine } from 'react-icons/ri';
import { useFeatureToggle, FeatureToggleNames } from '~/feature-toggles';

export const SearchPokemonInput = (): JSX.Element => {
  const { isFeatureEnabled } = useFeatureToggle(FeatureToggleNames.ENABLE_SEARCH_TOGGLE);

  if (!isFeatureEnabled) return <></>;

  return (
    <div className="flex justify-center h-1/5 pb-8">
      <div className="relative h-26">
        <div className="rounded-3xl border-2 shadow-lg w-full">
          <input
            type="text"
            className="w-64 py-2 pl-10 pr-4 rounded-full shadow-md focus:outline-none focus:grayscale-0"
            placeholder="Search for a Pokemon"
          />
          <div className="absolute inset-y-0 left-4 flex items-center">
            <RiSearchLine size="1.2rem" color="lightslategray" />
          </div>
        </div>
      </div>
    </div>
  );
};
