import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Relative base so the build works on GitHub Pages, Vercel or any subfolder.
export default defineConfig({
  base: './',
  plugins: [react()],
});
