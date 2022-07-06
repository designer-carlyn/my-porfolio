<template>
    <div class="home">
      <Splash></Splash>
      <About></About>
      <Expertise></Expertise>
    </div>
</template>

<script>
  import Splash from '@/components/Splash.vue'
  import About from '@/components/About.vue'
  import Expertise from '@/components/Expertise.vue'

  export default {
    name: 'Home',

    components: {
      Splash,
      About,
      Expertise,
    },
  }
</script>
