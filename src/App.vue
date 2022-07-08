<template>
  <v-app>
    <Header></Header>
    <v-main>
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
  import Header from '@/layout/Header.vue'
  import Footer from '@/layout/Footer.vue'

  export default {
    name: 'App',

    components: {
      Header,
      Footer
    },

    data: () => ({
      //
    }),
  };
</script>

<style lang="scss">
  .container {
    @media (min-width: 1600px) and (max-width: 2560px) {
      max-width: 1185px;;
    }
  }
</style>