<template>
    <div class="home__splash" id="splash">
        <v-container>
            <div class="splash-content">
                <div class="splash-info">
                    <h1 class="mb-0">Hey There,</h1>
                    <h1>I'm <span>Carlo Segovia</span></h1>
                    <p>I’m a Web Designer and I’m very passionate and dedicated at my work.</p>
                    <div class="splash-button">
                        <v-btn class="btn-custom" x-large>Say Hello <v-icon class="ml-3" small>fas fa-location-arrow</v-icon></v-btn>
                        <v-btn class="btn-custom-light" x-large>Resume <v-icon class="ml-3" small>fas fa-download</v-icon></v-btn>
                    </div>
                </div>
                <div class="splash-image">
                    <img src="@/assets/image/splash_profile.png" alt="">
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Splash'
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/section/_splash.scss';
</style>