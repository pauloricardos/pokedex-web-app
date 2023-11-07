import { SearchPokemonInput } from '../search-pokemon-input/SearchPokemonInput';

export const BrowsePokemons = (): React.ReactNode => {
  return (
    <>
      <main className="w-full h-screen p-8">
        <SearchPokemonInput />
        <div className="h-full">
          <div className="w-1/5 min-w-max flex flex-row-reverse bg-grass-type-secondary rounded-2xl">
            <div className="p-3 flex justify-center items-start bg-grass-type rounded-xl">
              <div className='flex'>
                <img
                  src="/images/grass-type-outline.png"
                  className="bg-grass-type relative left-5"
                  alt="grass-type icon"
                />
                <img src="/images/bulbasaur.png" className='relative right-2/4' alt="" />
              </div>
            </div>
            <div className="h-full w-full bg-grass-type-secondary rounded-tl-xl rounded-bl-xl p-2 flex flex-col">
              <p className="text-xs font-semibold text-black-gray-scale">
                0001
              </p>
              <p className="text-xl font-semibold text-black-gray-scale mb-3">
                Bulbasaur
              </p>
              <div className="flex w-5/6">
                <div className="p-1 w-1/3 bg-grass-type rounded-lg mr-2 flex flex-row">
                  <div className="flex bg-white rounded-xl w-1/4 mr-2">
                    <img
                      src="/images/grass-type.png"
                      className="w-11/12 p-1"
                      alt=""
                    />
                  </div>
                  <p className="text-xs font-medium text-justify w-3/5 p-1">
                    Grass
                  </p>
                </div>
                <div className="p-1 w-1/3 bg-poison-type rounded-lg mr-2 flex flex-row">
                  <div className="flex bg-white rounded-xl w-1/4 mr-2">
                    <img
                      src="/images/poison.png"
                      className="w-11/12 p-1"
                      alt=""
                    />
                  </div>
                  <p className="text-xs font-medium text-justify w-3/5 p-1">
                    Poison
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
