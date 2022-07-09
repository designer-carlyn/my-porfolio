<template>
    <div class="home__splash" id="splash">
        <v-container>
            <div class="splash-content">
                <div class="splash-info">
                    <h1 class="mb-0" data-aos="fade-up" data-aos-duration="600">Hey There,</h1>
                    <h1 data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">I'm <span>Carlo Segovia</span></h1>
                    <p data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">I’m a Web Designer and I’m very passionate and dedicated at my work.</p>
                    <div class="splash-button">
                        <a href="mailto:carlosegovia5@gmail.com">
                            <v-btn class="btn-custom" x-large data-aos="flip-up" data-aos-duration="900" data-aos-delay="400">Say Hello <v-icon class="ml-3" small>fas fa-location-arrow</v-icon></v-btn>
                        </a>
                        <a :href="publicPath+'carlo-arlyn-segovia.pdf'" download>
                            <v-btn class="btn-custom-light" x-large data-aos="flip-up" data-aos-duration="1000" data-aos-delay="500">Resume <v-icon class="ml-3" small>fas fa-download</v-icon></v-btn>
                        </a>
                    </div>
                </div>
                <div class="splash-image" data-aos="zoom-in" data-aos-duration="1100" data-aos-delay="600">
                    <img src="@/assets/image/splash_profile.png" alt="">
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Splash',

        data() {
            return {
                publicPath: process.env.BASE_URL
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/section/_splash.scss';
</style>