import vue from '@vitejs/plugin-react'

/**
  * https://vitejs.dev/config/
  * @type {import('vite').UserConfig}
  */
export default {
   plugins: [vue()],

   // add this:
   server: { 
     host: '0.0.0.0'
   } 
}