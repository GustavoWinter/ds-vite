import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  server: {
    port: 3001,
  },
  build: {
    lib: {
      entry: 'src/index.js',
      name: 'Ds-vite',
      fileName: 'index',
    },
    rollupOptions: {
      external: ['@storybook/*'],
      output: {
        dir: 'dist',
        entryFileNames: '[name].js',
        assetFileNames: '[name].[ext]',
      },
    },
    assetsDir: '',
  },
})