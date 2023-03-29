<template>
    <div class="portfolio" id="portfolio">
        <v-container>
            <div class="portfolio__content">
                <!-- <CoolLightBox :items="items" :index="index" @close="index = null"></CoolLightBox> -->
                <h1 class="section-title" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">Look at my <br> recent projects</h1>
            </div>
        </v-container>
        <v-container>
            <div class="portfolio-list">
                <div class="list-item" v-for="(item, index) in projectList" :key="index" data-aos="fade-up" :data-aos-duration="item.aosDuration" :data-aos-delay="item.aosDelay">
                    <div class="item-image">
                        <img :src="item.imageSrc" :alt="item.imageAlt">
                    </div>
                    <div class="item-info">
                        <div class="info-title">{{item.title}}</div>
                        <div class="info-tech">
                            <ul>
                                <li v-for="(items, index) in item.tech" :key="index">{{items}}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <v-list-item :href="item.previewLink" :ripple="false" target="_blank" class="preview-link preview-site">Preview Site <v-icon small>fas fa-external-link-alt</v-icon></v-list-item>
                        <v-list-item :href="item.souceCodeLink" target="_blank" class="preview-link  preview-code">Source Code <v-icon small>fas fa-code</v-icon></v-list-item>
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Portfolio',

        data() {
            return {
                projectList: [{
                    title: 'RPS Game',
                    tech: ['HTML', 'CSS', 'JS'],
                    imageSrc: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/rps-game_M1OH4Eos.webp?updatedAt=1680076784507',
                    imageAlt: 'Rest Countries API',
                    previewLink: 'https://cs-rps-game.netlify.app/',
                    souceCodeLink: 'https://github.com/designer-carlyn/rps-game',
                    aosDuration: '800',
                    aosDelay: '400',
                },{
                    title: 'Rest Countries API',
                    tech: ['HTML', 'CSS', 'JS', 'API'],
                    imageSrc: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/rest-countries-api_Mnr3UDYWm.webp?updatedAt=1679460276991',
                    imageAlt: 'Rest Countries API',
                    previewLink: 'https://cs-rest-countries-api.netlify.app/',
                    souceCodeLink: 'https://github.com/designer-carlyn/rest-countries-api',
                    aosDuration: '800',
                    aosDelay: '500',
                },{
                    title: 'Todo App',
                    tech: ['HTML', 'CSS', 'JS'],
                    imageSrc: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/todo_app_KPFn8Kj0O.webp?updatedAt=1678863890733',
                    imageAlt: 'Todo App',
                    previewLink: 'https://cs-todo-app.netlify.app/',
                    souceCodeLink: 'https://github.com/designer-carlyn/todo-app',
                    aosDuration: '800',
                    aosDelay: '600',
                },{
                    title: 'Password Generator',
                    tech: ['HTML', 'CSS', 'JS'],
                    imageSrc: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/password-generator_NHud31vNn.webp?updatedAt=1678863890907',
                    imageAlt: 'Password Generator',
                    previewLink: 'https://cs-password-generator.netlify.app/',
                    souceCodeLink: 'https://github.com/designer-carlyn/password-generator-app',
                    aosDuration: '800',
                    aosDelay: '400',
                },{
                    title: 'URL shortening API landing page',
                    tech: ['HTML', 'CSS', 'JS', 'API'],
                    imageSrc: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/url-shortening-link_zlomdqUydS.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1678074115351',
                    imageAlt: 'URL shortening API landing page',
                    previewLink: 'https://cs-url-shortening-link.netlify.app/',
                    souceCodeLink: 'https://github.com/designer-carlyn/url-shortening-link',
                    aosDuration: '800',
                    aosDelay: '500',
                },{
                    title: 'Tip Calculator App',
                    tech: ['HTML', 'CSS', 'JS'],
                    imageSrc: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/tip-calculator-app_TwTR5hjoh2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1678074114702',
                    imageAlt: 'Tip Calculator App',
                    previewLink: 'https://cs-tip-calculator.netlify.app/',
                    souceCodeLink: 'https://github.com/designer-carlyn/tip-calculator-app',
                    aosDuration: '800',
                    aosDelay: '600',
                },{
                    title: 'Notifications page',
                    tech: ['HTML', 'CSS', 'JS'],
                    imageSrc: 'https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/notification_page_2yEcQIrl1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1678068889281',
                    imageAlt: 'Notifications page',
                    previewLink: 'https://cs-notification-page-solution.netlify.app/',
                    souceCodeLink: 'https://github.com/designer-carlyn/notification-page',
                    aosDuration: '800',
                    aosDelay: '400',
                }]
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/section/_portfolio.scss';
</style>