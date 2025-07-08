// vite.config.ts
import { defineConfig } from 'vitest/config'; // ✅ use vitest/config
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
