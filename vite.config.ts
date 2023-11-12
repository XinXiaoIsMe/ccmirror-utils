import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import glob from 'fast-glob';
import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

export default defineConfig(({}) => {
    createUtilEntry();

    const entries = glob.sync('src/**/*.ts');

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

function createUtilEntry () {
    const paths = glob.sync('src/**/*.ts');
    const indexPath = path.resolve(process.cwd(), './src/index.ts');
    const fileContent = paths.filter(path => path !== 'src/index.ts').reduce((content, path) => {
        const filename = path.split('/')[1].split('.')[0];
        content += `\nexport { default as ${ filename } } from './${ filename }'`;
        return content;
    }, '// auto generated');
    fs.writeFileSync(indexPath, fileContent);
}
