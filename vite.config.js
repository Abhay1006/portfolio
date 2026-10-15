import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: { port: 3000 },
  // Netlify publishes build/, same as the old Create React App output
  build: { outDir: 'build' },
});
