import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import glob from 'fast-glob';

export default defineConfig(({}) => {
    const entries = [
        ...glob.sync('src/**/*.ts')
    ];

    return {
        plugins: [
            dts({
                outDir: 'dist/types',
                entryRoot: 'src'
            })
        ],
        build: {
            minify: false,
            sourcemap: true,
            outDir: 'dist',
            lib: {
                name: 'UdsUtil',
                entry: entries,
            },
            rollupOptions: {
                output: [
                    {
                        format: 'esm',
                        dir: 'dist/es',
                        exports: undefined,
                        sourcemap: true,
                        entryFileNames: '[name].mjs'
                    },
                    {
                        format: 'cjs',
                        dir: 'dist/lib',
                        exports: 'named',
                        sourcemap: true,
                        entryFileNames: '[name].js',
                    }
                ]
            }
        }
    }
});
