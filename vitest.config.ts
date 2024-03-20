import { vitePlugin } from '@remix-run/dev';
import { installGlobals } from '@remix-run/node';
import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';
import { vercelPreset } from '@vercel/remix/vite';

installGlobals();

export default defineConfig({
  plugins: [
    vitePlugin({
      presets: [vercelPreset()],
    }),
    tsconfigPaths(),
  ],
  test: {
    coverage: {
      all: true,
      exclude: ['node_modules/**'],
    },
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./app/tests/setup.ts'],
    mockReset: true,
  },
});
