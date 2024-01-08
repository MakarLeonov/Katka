// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // css: ['~/assets/main.scss'],
  css: [
    '@/assets/scss/reset.scss',
    // '@mdi/font/css/materialdesignicons.min.css',
    // 'vuetify/lib/styles/main.sass',
    '@/assets/scss/global.scss',
  ],
  vite: {
      // plugins: [
      //     eslintPlugin(),
      //     stylelintPlugin({
      //         emitError: true,
      //         emitErrorAsWarning: true,
      //         include: ['**/*.{vue,scss}'],
      //     }),
      // ],
      css: {
          preprocessorOptions: {
              scss: {
                  additionalData: '@import "@/assets/scss/_mixins.scss"; @import "@/assets/scss/_variables.scss";',
              },
          },
      },
      // clearScreen: false,
      // build: {
      //     reportCompressedSize: false,
      // },
  },
})
