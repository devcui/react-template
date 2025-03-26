import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react-swc';

export default defineConfig(({ mode }) => {
  return {
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src')
      }
    },
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      assetsInlineLimit: 4096,
      cssCodeSplit: true,
      sourcemap: false,
      minify: 'esbuild'
    },
    esbuild: {
      drop: mode === 'prod' ? ['console', 'debugger'] : []
    },
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 3000,
      open: true,
      proxy: {
        '/api': {
          target: '',
          changeOrigin: true,
          secure: false,
          rewrite: path => path.replace(/^\/cloud/, '/api')
        }
      },
      cors: true
    }
  };
});
