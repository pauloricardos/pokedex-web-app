import React, { createContext, type ReactNode } from 'react';
import type { FeatureToggleContextProps } from './types.d';

export const FeatureToggleContext = createContext<
FeatureToggleContextProps | undefined
>(undefined);

export const FeatureToggleProvider: React.FC<{
  children: ReactNode;
  value: FeatureToggleContextProps
}> = ({ children, value }) => {
  return (
    <FeatureToggleContext.Provider value={value}>
      {children}
    </FeatureToggleContext.Provider>
  );
};
