import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react(),
      ],
      // This fix tells Vite your site is hosted at this specific subfolder on GitHub
      base: mode === 'production' 
        ? '/artjoy-digitalfor-iict-member/' 
        : '/',
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});