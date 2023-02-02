import react from '@vitejs/plugin-react'
import plugin from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    plugin({
      'jsxRuntime': 'classic'
    }),
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: '@taylorbyks/ui',
      formats: ['es', 'umd'],
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'phosphor-react', '@radix-ui/react-checkbox', '@radix-ui/react-slot', 'clsx'],
      output: {
        globals: {
          react: 'React',
          'phosphor-react': 'Phosphor',
          '@radix-ui/react-checkbox': 'Checkbox',
          '@radix-ui/react-slot': 'Slot',
          clsx: 'clsx',
        },
      },
    },
  },
})
