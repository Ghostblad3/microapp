import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  html: {
    template: './index.html',
  },
  server: {
    port: 2000,
  },
  plugins: [pluginReact()],
  resolve: {
    dedupe: ['react', 'react-dom', 'react/jsx-runtime'],
  },
});
