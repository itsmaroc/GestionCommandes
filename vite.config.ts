import { defineConfig } from 'vite';
import angular from '@analogjs/vite-plugin-angular';

export default defineConfig({
  plugins: [angular()],
  ssr: {
    noExternal: ['bootstrap'], // Excluez Bootstrap du bundle serveur
  },
});