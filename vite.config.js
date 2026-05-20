// vite.config.js — Vortex Fitness
// Configuración minimalista para SPA estática lista para Netlify

import { defineConfig } from 'vite'

export default defineConfig({
    // Sin framework — HTML puro + Swiper
    root: '.',
    publicDir: 'public',

    build: {
        outDir: 'dist',
        emptyOutDir: true,
        minify: 'terser',       // minificación agresiva de JS
        cssMinify: true,
        rollupOptions: {
        input: {
            main: './index.html'
        },
        output: {
            // Hashing de assets para cache busting en CDN
            assetFileNames: 'assets/[name]-[hash][extname]',
            chunkFileNames:  'assets/[name]-[hash].js',
            entryFileNames:  'assets/[name]-[hash].js'
        }
        }
    },

    server: {
        port: 3000,
        open: true
    }
})