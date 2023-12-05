import type { FeatureToggleConfig, FeatureToggleContextProps } from './types';

export const featureToggleConfig: FeatureToggleContextProps = {
  featureToggles: {
    enableSearch: false,
  } satisfies FeatureToggleConfig
};
