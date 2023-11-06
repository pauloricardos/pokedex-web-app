import { SearchPokemonInput } from '../search-pokemon-input/SearchPokemonInput';

export const BrowsePokemons = (): React.ReactNode => {
  return (
    <>
      <main className="w-full h-screen p-8">
        <SearchPokemonInput />
        <div className="h-full">
          <div className="max-w-max h-2/6 w-1/5 flex flex-col">
            <div className="p-3 flex justify-center items-start bg-grass-type rounded-t-md">
              <img
                src="/images/grass-type-outline.png"
                className="w-9/12 bg-grass-type"
                alt=""
              />
            </div>
            <div className="h-full bg-grass-type-secondary rounded-b-md">
              <p>No 1</p>
              <p>Bulbasaur</p>
              <span>Grass/Poison</span>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};
