<template>
    <div class="portfolio" id="portfolio">
        <v-container>
            <div class="portfolio__content">
                <CoolLightBox :items="items" :index="index" @close="index = null"></CoolLightBox>
                <h1 class="section-title">Look at my <br> recent projects</h1>
                <div class="portfolio-slider">
                    <div class="swiper-container">
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
                    <div class="navigation">
                        <div class="navigation-button navigation-prev-project">
                            <v-icon>fas fa-arrow-left</v-icon>
                        </div>
                        <div class="navigation-button navigation-next-project">
                            <v-icon>fas fa-arrow-right</v-icon>
                        </div>
                    </div>
                </div>
            </div>
        </v-container>
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
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/shop_online_store_NZD5Tzy8P.jpg',
                    demoLink: '',
                    hasDemo: true,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/cikay_n3sFeXIW9.jpg',
                    demoLink: '',
                    hasDemo: true,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/dashboard2_QsFgVzPITD.jpg',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/up_speed_KlGpGC8Av.jpg',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup1_Nta3mFqnG2.jpg',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/dashboard1_KQgW7v4b2.jpg',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/tru_vital_9GUq5kKtm.jpg',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/success_community_G3axTULS_.jpg',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/delex_C7onziCsN.jpg',
                    demoLink: '',
                    hasDemo: false,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup2_ypTxQNfKb.jpg',
                    demoLink: '',
                    hasDemo: false,
                },],
                items: [
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/shop_online_store_NZD5Tzy8P.jpg',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/cikay_n3sFeXIW9.jpg',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/dashboard2_QsFgVzPITD.jpg',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/up_speed_KlGpGC8Av.jpg',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup1_Nta3mFqnG2.jpg',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/dashboard1_KQgW7v4b2.jpg',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/tru_vital_9GUq5kKtm.jpg',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/success_community_G3axTULS_.jpg',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/delex_C7onziCsN.jpg',
                    'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/mockup2_ypTxQNfKb.jpg',
                ],
                index: null,
            }
        },

        mounted() {
            new Swiper('.swiper-container', {
				modules: [Navigation],
                slidesPerView: 2,
                spaceBetween: 30,
                autoplay: {
                    delay: 5000,
                },
				navigation: {
					nextEl: '.navigation-next-project',
					prevEl: '.navigation-prev-project',
				},
                breakpoints: {
                        1280: {
                            slidesPerView: 2,
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