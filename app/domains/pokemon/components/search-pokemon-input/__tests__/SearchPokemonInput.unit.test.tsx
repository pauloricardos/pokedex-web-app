import { beforeEach, describe, expect, it, vi } from 'vitest';
import { render, screen } from '~/tests/helpers/test-utils';
import { SearchPokemonInput } from '../SearchPokemonInput';
import { useFeatureToggle } from '~/feature-toggles';

vi.mock('~/feature-toggles');

describe('SearchPokemonInput', () => {
  describe('when the feature toggle ENABLE_SEARCH_TOGGLE is enabled', () => {
    const useFeatureToggleMocked = vi.mocked(useFeatureToggle);

    beforeEach(() => {
      useFeatureToggleMocked.mockReturnValue({ isFeatureEnabled: true });
    });

    it('then renders the search pokemon input component', () => {
      render(<SearchPokemonInput />);

      const searchInput = screen.getByRole('textbox');

      expect(searchInput).toBeInTheDocument();
    });
  });

  describe('when the feature toggle ENABLE_SEARCH_TOGGLE is disabled', () => {
    const useFeatureToggleMocked = vi.mocked(useFeatureToggle);

    beforeEach(() => {
      useFeatureToggleMocked.mockReturnValue({ isFeatureEnabled: false });
    });

    it('then does not renders the search pokemon input component', () => {
      render(<SearchPokemonInput />);

      const searchInput = screen.queryByRole('textbox');

      expect(searchInput).not.toBeInTheDocument();
    });
  });
});
