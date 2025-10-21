import { defineConfig } from 'tsup'

export default defineConfig({
  entry: [
    'src/index.ts',
  ],
  format: ['esm', 'cjs'],
  splitting: true,
  dts: true,
  clean: true,
  sourcemap: true,
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
