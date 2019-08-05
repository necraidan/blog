module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: 'Vue Static CMS',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  generate: {
    routes: ['/', '/hello-static-blogging', '/foo-bar']
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B8070' },

  /*
   ** Build configuration
   */
  build: {
    loaders: [
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1KO
          name: 'img/[name].[hash:7].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 1000, // 1 KO
          name: 'fonts/[name].[hash:7].[ext]'
        }
      }
    ]
  },
  css: ['@/styles/base.scss'],
  plugins: [],
  modules: [
    'bootstrap-vue/nuxt',
    // '@nuxtjs/font-awesome',
    /* ['@nuxtjs/google-analytics', { ua: 'YOUR_ANALYTICS_ID' }], */
    ['@nuxtjs/markdownit', { html: true, linkify: true, breaks: true }]
  ]
};
