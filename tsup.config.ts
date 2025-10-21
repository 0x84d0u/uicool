import { defineConfig } from 'tsup'
import fs from 'fs-extra'; // Import fs-extra
import path from 'path'; // Import path

export default defineConfig({
  entry: [
    'src/_EXPORT/index.ts',
    'src/_EXPORT/hooks.ts',
    'src/_EXPORT/site.ts',
    'src/_EXPORT/theme.ts',
    'src/_EXPORT/utils.ts',
  ],
  format: ['esm', 'cjs'],
  splitting: true,
  dts: true,
  clean: true,
  sourcemap: true,
  async onSuccess() {
    console.log('Build successful, copying CSS...');
    const sourceCss = path.resolve(__dirname, 'src/styles/index.css');
    const destCss = path.resolve(__dirname, 'dist/styles.css'); // Copy directly into dist

    try {
      // Ensure destination directory exists (though 'dist' should exist after tsup runs)
      await fs.ensureDir(path.dirname(destCss));
      // Copy the file
      await fs.copyFile(sourceCss, destCss);
      console.log('Successfully copied styles.css to dist/');
    } catch (err) {
      console.error('Error copying CSS file:', err);
    }
  },
})

// export default defineConfig([
//     {
//         entry: ['src/_client/index.ts'],
//         format: ['esm', 'cjs'],
//         dts: true,
//         sourcemap: true,
//         clean: true,
//         outDir: 'dist/client',
//         minify: false,
//         splitting: false,
//         banner: {
//             js: '"use client";', // ensures all client exports retain the directive
//         },
//     },
//     // Server build
//     {
//         entry: ['src/_server/index.ts'],
//         format: ['esm', 'cjs'],
//         dts: true,
//         sourcemap: true,
//         outDir: 'dist/server',
//         minify: false,
//         splitting: false,
//     },
//     {
//         entry: ['src/_index/index.ts'],
//         format: ['esm', 'cjs'],
//         dts: true,
//         sourcemap: true,
//         outDir: 'dist/index',
//         minify: false,
//         splitting: false,
    
//     },
// ])
