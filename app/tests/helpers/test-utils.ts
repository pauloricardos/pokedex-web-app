import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
export * from '@testing-library/react';

const customRender = (ui: JSX.Element, options?: any) =>
  render(ui, { ...options });

export { customRender as render, userEvent };
