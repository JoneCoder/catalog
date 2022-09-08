import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        vue(),
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
    ],
    publicDir :(process.env.MIX_VUE_ROUTER_BASE) ? '/' + process.env.MIX_VUE_ROUTER_BASE + '/' : '/test/',
    build: {
        outDir: 'public/build',
        sourcemap: true,
        minify: 'esbuild',
        rollupOptions:{
            output:{
                entryFileNames:"assets/[name].[hash].js",
                chunkFileNames:"assets/[name].[hash].js",
                assetFileNames:"assets/[name].[hash].[ext]"
            }
        },

    },
});
