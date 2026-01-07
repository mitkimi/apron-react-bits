import { defineConfig } from 'vite';
import path from 'path';
import { resolve } from 'path';
export default defineConfig({
    root: __dirname,
    build: {
        lib: {
            entry: resolve(__dirname, 'src/index.ts'),
            name: 'ApronReactLogoParticleGather',
            fileName: (format) => `index.${format}.js`,
            formats: ['es', 'umd'],
        },
        rollupOptions: {
            external: ['react', 'react-dom'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
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
