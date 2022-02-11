export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'test-one',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },

    //StyleSheet
    // {
    //   rel="apple-touch-icon", 
    //   sizes="180x180", 
    //   href="assets/img/favicons/apple-touch-icon.png"
    // },
    // {
    //   rel="icon" type="image/png", 
    //   sizes="32x32", 
    //   href="assets/img/favicons/favicon-32x32.png"
    // },
    // {
    //   rel="icon", 
    //   type="image/png", 
    //   sizes="16x16", 
    //   href="assets/img/favicons/favicon-16x16.png"
    // },
    // {
    //   rel="shortcut icon", 
    //   type="image/x-icon", 
    //   href="assets/img/favicons/favicon.ico"
    // },
    // {},
    // {},
    //
    { 
      rel: "preconnect", 
      href: "https://fonts.gstatic.com" 
    },

    {
      href: "https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700%7cPoppins:300,400,500,600,700,800,900&amp;display=swap", 
      rel: "stylesheet" 
    },
    {
      href: "https://prium.github.io/falcon/v3.5.0/vendors/OverlayScrollbars.min.css", 
      rel: "stylesheet"
    },
    {
      href: "assets/css/theme-rtl.min.css", 
      rel: "stylesheet", 
      id: "style-rtl"
    },
    {
      href: "https://prium.github.io/falcon/v3.5.0/assets/css/theme.min.css",
      rel: "stylesheet", 
      id: "style-default"
    },
    {
      href: "assets/css/user-rtl.min.css", 
      rel: "stylesheet", 
      id: "user-style-rtl"
    },
    {
      href: "https://prium.github.io/falcon/v3.5.0/assets/css/user.min.css", 
      rel: "stylesheet", 
      id: "user-style-default"
    }
    ],
    // JavaScripts
    script: [{
      type: "text/JavaScripts",
      src: "https://prium.github.io/falcon/v3.5.0/assets/js/config.js",
    }, 
    {
      type: "text/JavaScripts",
      src:"https://prium.github.io/falcon/v3.5.0/vendors/overlayscrollbars/OverlayScrollbars.min.js",
    },
    {
      type: "text/JavaScripts",
      src: "https://prium.github.io/falcon/v3.5.0/vendors/popper/popper.min.js",
    },
    {
      type: "text/JavaScripts",
      src: "https://prium.github.io/falcon/v3.5.0/vendors/bootstrap/bootstrap.min.js"
    },
    {
      type: "text/JavaScripts",
      src: "https://prium.github.io/falcon/v3.5.0/vendors/is/is.min.js"
    },
    {
      type: "text/JavaScripts",
      src: "https://prium.github.io/falcon/v3.5.0/vendors/echarts/echarts.min.js"
    },
    {
      type: "text/JavaScripts",
      src: "https://prium.github.io/falcon/v3.5.0/vendors/fontawesome/all.min.js"
    },
    {
      type: "text/JavaScripts",
      src: "https://prium.github.io/falcon/v3.5.0/vendors/lodash/lodash.min.js"
    },
    {
      type: "text/JavaScripts",
      src: "https://polyfill.io/v3/polyfill.min.js?features=window.scroll"
    },
    {
      type: "text/JavaScripts",
      src: "https://prium.github.io/falcon/v3.5.0/vendors/list.js/list.min.js"
    },
    {
      type: "text/JavaScripts",
      src: "https://prium.github.io/falcon/v3.5.0/assets/js/theme.js"
    }
  
    
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
