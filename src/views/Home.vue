<template>
    <div class="home">
      <Splash></Splash>
      <About></About>
      <Expertise></Expertise>
      <Portfolio></Portfolio>
    </div>
</template>

<script>
  import Splash from '@/components/Splash.vue'
  import About from '@/components/About.vue'
  import Expertise from '@/components/Expertise.vue'
  import Portfolio from '@/components/Portfolio.vue'

  export default {
    name: 'Home',

    components: {
      Splash,
      About,
      Expertise,
      Portfolio,
    },
  }
</script>
