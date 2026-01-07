import { defineConfig } from 'vite';
import path from 'path';
import { resolve } from 'path';
export default defineConfig({
    root: __dirname,
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'ApronReactCLI',
            fileName: (format) => `index.${format}.js`,
            formats: ['es'],
        },
        rollupOptions: {
            external: ['commander', 'inquirer', 'execa', 'ora'],
            output: {
                globals: {
                    commander: 'Commander',
                    inquirer: 'Inquirer',
                    execa: 'Execa',
                    ora: 'Ora',
                },
            },
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
});
