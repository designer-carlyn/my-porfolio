<template>
    <div class="portfolio">
        <v-container>
            <div class="portfolio__content">
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
                                            <v-btn x-large><v-icon>fas fa-eye</v-icon></v-btn>
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
                demoLink: true,
                projectItem: [{
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/shop_online_store_NZD5Tzy8P.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657169039669',
                    demoLink: '',
                    viewImage: '',
                    hasDemo: true,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/cikay_n3sFeXIW9.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657169041402',
                    demoLink: '',
                    viewImage: '',
                    hasDemo: true,
                },
                {
                    image: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/dashboard2_QsFgVzPITD.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1657169041216',
                    demoLink: '',
                    viewImage: '',
                    hasDemo: false,
                },]
            }
        },

        mounted() {
            new Swiper('.swiper-container', {
				modules: [Navigation],
                slidesPerView: 2,
                spaceBetween: 30,
                autoplay: {
                    delay: 3000,
                },
				navigation: {
					nextEl: '.navigation-next-project',
					prevEl: '.navigation-prev-project',
				},
			},);
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/section/_portfolio.scss';
</style>