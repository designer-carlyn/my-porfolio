<template>
    <div class="about" id="about">
        <div class="container">
            <div class="about__row">
                <v-row>
                    <v-col cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
                        <div class="about-image" data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
                            <div class="about-image-inner">
                                <img class="profile-img" src="@/assets/image/about_placeholder.jpg" alt="">
                                <div class="follow-me">
                                    <h4>Follow me on Social Media</h4>
                                    <router-link to="#">
                                        <div class="social-link">
                                            <img src="" alt="">
                                        </div>
                                    </router-link>
                                    <router-link to="#">
                                        <div class="social-link">
                                            <img src="" alt="">
                                        </div>
                                    </router-link>
                                    <router-link to="#">
                                        <div class="social-link">
                                            <img src="" alt="">
                                        </div>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <v-col class="d-flex align-center" cols="12" xl="6" lg="6" md="6" sm="12" xs="12">
                        <div class="about-info">
                            <h1 class="section-title" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">About Me</h1>
                            <p data-aos="fade-up" data-aos-duration="800" data-aos-delay="600">With 4 years’ worth of experience as a passionate and dedicated web designer and front-end developer, I have acquired the skills and knowledge necessary to make your project a success. I enjoy every step of the design process, from discussion and collaboration to concept and execution, but I find the most satisfaction in seeing the finished product do everything for you that it was created to do.</p>
                            <a :href="publicPath+'carlo-arlyn-segovia.pdf'" download>
                                <v-btn class="btn-custom" x-large data-aos="flip-up" data-aos-duration="800" data-aos-delay="800">Download CV <v-icon class="ml-3" small>fas fa-download</v-icon></v-btn>
                            </a>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'About',

        data() {
            return {
                publicPath: process.env.BASE_URL
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/section/_about.scss';
</style>