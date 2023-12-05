export type FeatureToggleContextProps = {
  featureToggles: FeatureToggleConfig;
}

export type FeatureToggleConfig = {
  enableSearch: boolean;
}

export type UseFeatureToggleResult = {
  isFeatureEnabled: boolean;
}