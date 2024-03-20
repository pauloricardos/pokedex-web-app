import {
  type MetaFunction,
  defer,
  type LoaderFunctionArgs,
} from '@vercel/remix';
import {
  Await,
  useLoaderData,
} from '@remix-run/react';
import { Suspense } from 'react';
import { retrievePokemons } from '~/api/services';
import { ErrorScreen, LoadingSpinner } from '~/components';
import { BrowsePokemons } from '~/domains/pokemon/components';
import { FeatureToggleProvider, featureToggleConfig } from '~/feature-toggles';

export const meta: MetaFunction = () => {
  return [{ title: 'Pokedex' }, { name: 'Pokemon', content: 'Pokemon' }];
};

export const loader = ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const pageSize = url.searchParams.get('pageSize') || '200';

  const pokemonsPromise = retrievePokemons({
    pageSize: Number(pageSize),
  });

  return defer({
    result: pokemonsPromise,
  });
};

export default function Index() {
  const { result } = useLoaderData<typeof loader>();

  return (
    <>
      <FeatureToggleProvider value={featureToggleConfig}>
        <Suspense
          fallback={
            <div className="h-80 flex justify-center">
              <LoadingSpinner />
            </div>
          }
        >
          <Await resolve={result} errorElement={<ErrorScreen />}>
            <BrowsePokemons />
          </Await>
        </Suspense>
      </FeatureToggleProvider>
    </>
  );
}
