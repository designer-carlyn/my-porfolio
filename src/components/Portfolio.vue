<template>
    <div class="portfolio" id="portfolio">
        <v-container>
            <div class="portfolio__content">
                <CoolLightBox :items="items" :index="index" @close="index = null"></CoolLightBox>
                <h1 class="section-title" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">Look at my <br> recent projects</h1>
            </div>
        </v-container>
        <div class="container--fluid">
            <div class="portfolio-slider">
                <div class="swiper-container" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <div class="swiper-wrapper">
                        <!-- Slides -->
                        <div class="swiper-slide" v-for="(item, i) in projectItem" :key="i">
                            <div class="slide-container">
                                <div class="slide-image">
                                    <img :src="item.image" alt="">

                                    <div class="slide-action">
                                        <router-link :to="item.demoLink" v-if="item.hasDemo">
                                            <v-btn x-large><v-icon>fas fa-external-link-alt</v-icon></v-btn>
                                        </router-link>
                                        <v-btn x-large @click="index = i"><v-icon>fas fa-eye</v-icon></v-btn>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navigation" data-aos="flip-up" data-aos-duration="800" data-aos-delay="600">
                    <div class="navigation-button navigation-prev-project">
                        <v-icon>fas fa-arrow-left</v-icon>
                    </div>
                    <div class="navigation-button navigation-next-project">
                        <v-icon>fas fa-arrow-right</v-icon>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Swiper , { Autoplay, Navigation } from 'swiper';
    import 'swiper/swiper-bundle.css'
	Swiper.use([Autoplay, Navigation]);

    export default {
        name: 'Portfolio',

        components: {
            Swiper,
        },

        data() {
            return {
                projectItem: [{
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/shop_online_store_07X_i-AfJ.webp',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/cikay_blog_hXNI1Zjlj.webp',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/dashboard1_57LcfxmCG.webp',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/my_portfolio_7BRz0QrZ7.webp',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup1_T9NQbd5jU.webp',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup2_ALjCdgCU1.webp',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup3_ofHXLQ21Y.webp',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup4_Za4KO5em9.webp',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup5_MKK0U8rkU.webp',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup6_J_X8IPz60.webp',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup8_ksuhRmNKb.webp',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/dashboard2_7Vpxeu1I0.webp',
                    demoLink: '',
                    hasDemo: false,
                },],
                items: [
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/shop_online_store_07X_i-AfJ.webp',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/cikay_blog_hXNI1Zjlj.webp',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/dashboard1_57LcfxmCG.webp',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/my_portfolio_7BRz0QrZ7.webp',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup1_T9NQbd5jU.webp',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup2_ALjCdgCU1.webp',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup3_ofHXLQ21Y.webp',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup4_Za4KO5em9.webp',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup5_MKK0U8rkU.webp',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup6_J_X8IPz60.webp',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup8_ksuhRmNKb.webp',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/dashboard2_7Vpxeu1I0.webp',
                ],
                index: null,
            }
        },

        mounted() {
            new Swiper('.swiper-container', {
				modules: [Navigation],
                slidesPerView: 3,
                spaceBetween: 0,
                centeredSlides: true,
                loop: true,
                autoplay: {
                    delay: 5000,
                },
				navigation: {
					nextEl: '.navigation-next-project',
					prevEl: '.navigation-prev-project',
				},
                breakpoints: {
                        1280: {
                            slidesPerView: 3,
                        },
                        320: {
                            slidesPerView: 1,
                        },
                    }
			},);
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/section/_portfolio.scss';
</style>