// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: false },
  alias:{
    "@": resolve(__dirname, "/"),
  },
  css:["~/assets/main.css"],
  app:{
    head:{
      link:[
        {
          rel:'icon', type:'image/x-icon', href:'/public/favicon.ico'
        },
        // {
        //   rel:'stylesheet', href:'./assets/fonts.css'
        // },
        // {
        //   rel:'stylesheet', href:'./assets/pages.css'
        // }
      ]
    }
    
  }
})
