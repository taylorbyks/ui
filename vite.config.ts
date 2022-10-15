import react from '@vitejs/plugin-react'
import path from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'TS-UI',
      formats: ['es', 'umd'],
      fileName: (format) => `ts-ui.${format}.js`,
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
