import { useContext } from 'react';
import { FeatureToggleContext } from './FeatureToggleContext';
import type { FeatureToggleNames } from './enum';
import type { UseFeatureToggleResult } from './types';

export const useFeatureToggle = (featureToggleName: FeatureToggleNames): UseFeatureToggleResult => {
  const context = useContext(FeatureToggleContext);

  if (!context) {
    throw new Error('useFeatureToggle must be used within a FeatureToggleProvider');
  }

  const isFeatureEnabled = context.featureToggles[featureToggleName];

  checkFeatureToggle(featureToggleName, isFeatureEnabled)

  return { isFeatureEnabled };
};

const checkFeatureToggle = (featureToggleName: FeatureToggleNames, isFeatureEnabled: boolean) => {
  if (isFeatureEnabled === undefined) throw new Error(`Feature toggle ${featureToggleName} is not defined`)
}