<template>
  <v-app>
    <HeaderMobile v-if="isMobile"></HeaderMobile>
    <Header v-else></Header>
    <v-main>
      <router-view />
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
  import { isMobile } from 'mobile-device-detect'
  import Header from '@/layout/Header.vue'
  import HeaderMobile from '@/layout/HeaderMobile.vue'
  import Footer from '@/layout/Footer.vue'

  export default {
    name: 'App',

    components: {
      Header,
      Footer,
      HeaderMobile
    },

    data() {
      return {
        isMobile: isMobile,
      }
    }
  };
</script>

<style lang="scss">
  .container {
    @media (min-width: 1600px) and (max-width: 2560px) {
      max-width: 1185px;;
    }
  }
</style>