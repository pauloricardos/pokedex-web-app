import { type MetaFunction, defer, type LoaderFunctionArgs } from '@remix-run/node';
import { Await, useLoaderData } from '@remix-run/react';
import { Suspense } from 'react';
import { retrievePokemons } from '~/api/services/retrievePokemons.server';
import { BrowsePokemons } from '~/domains/pokemon/components';
import { FeatureToggleProvider, featureToggleConfig } from '~/feature-toggles';

export const meta: MetaFunction = () => {
  return [{ title: 'Pokedex' }, { name: 'Pokemon', content: 'Pokemon' }];
};

export const loader = ({ request }: LoaderFunctionArgs) => {
  const url = new URL(request.url);
  const pageSize = url.searchParams.get("pageSize") || '200';

  const pokemonsPromise = retrievePokemons({
    page: '0',
    pageSize,
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
        <Suspense fallback="Loading...">
          <Await resolve={result}>
            <BrowsePokemons />
          </Await>
        </Suspense>
      </FeatureToggleProvider>
    </>
  );
}
