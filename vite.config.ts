import react from '@vitejs/plugin-react'

/**
  * https://vitejs.dev/config/
  * @type {import('vite').UserConfig}
  */
export default {
   plugins: [react()],

   // add this:
   server: { 
     host: '0.0.0.0'
   } 
}