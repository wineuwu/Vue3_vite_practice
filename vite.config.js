import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from "path"
import { serve } from 'esbuild'
import { resolve } from 'bluebird'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  alias: {
    '/@':path.resolve(__dirname,"src"),
  },
  server: {
    proxy:{
      '/api':{
        target: 'https://data.ntpc.gov.tw/api/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    }
  },
  build: {
    input:{
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          nested: resolve(__dirname, 'nested/index.html') 
        }
      }
      //清除hash 時設定

    }
  }

})
