import react from "@vitejs/plugin-react";
import { defineConfig } from 'vitest/config'
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    coverage: {
      all: true,
      exclude: ['node_modules/**'],
    },
    environment: "happy-dom",
    globals: true,
    setupFiles: ["./app/tests/setup.ts"],
    mockReset: true,
  },
})
