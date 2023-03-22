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
                <div class="list-item" data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1000">
                    <div class="item-image">
                        <img src="https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/rest-countries-api_Mnr3UDYWm.webp?updatedAt=1679460276991" alt="Rest Countries API">
                    </div>
                    <div class="item-info">
                        <div class="info-title">Rest Countries API</div>
                        <div class="info-tech">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <v-list-item href="https://cs-rest-countries-api.netlify.app/" :ripple="false" target="_blank" class="preview-link preview-site">Preview Site <v-icon small>fas fa-external-link-alt</v-icon></v-list-item>
                        <v-list-item href="https://github.com/designer-carlyn/rest-countries-api" target="_blank" class="preview-link  preview-code">Source Code <v-icon small>fas fa-code</v-icon></v-list-item>
                    </div>
                </div>
                <div class="list-item" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800">
                    <div class="item-image">
                        <img src="https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/todo_app_KPFn8Kj0O.webp?updatedAt=1678863890733" alt="Todo App">
                    </div>
                    <div class="item-info">
                        <div class="info-title">Todo App</div>
                        <div class="info-tech">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <v-list-item href="https://cs-todo-app.netlify.app/" :ripple="false" target="_blank" class="preview-link preview-site">Preview Site <v-icon small>fas fa-external-link-alt</v-icon></v-list-item>
                        <v-list-item href="https://github.com/designer-carlyn/todo-app" target="_blank" class="preview-link  preview-code">Source Code <v-icon small>fas fa-code</v-icon></v-list-item>
                    </div>
                </div>
                <div class="list-item" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800">
                    <div class="item-image">
                        <img src="https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/password-generator_NHud31vNn.webp?updatedAt=1678863890907" alt="Password Generator App">
                    </div>
                    <div class="item-info">
                        <div class="info-title">Password Generator App</div>
                        <div class="info-tech">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <v-list-item href="https://cs-password-generator.netlify.app/" :ripple="false" target="_blank" class="preview-link preview-site">Preview Site <v-icon small>fas fa-external-link-alt</v-icon></v-list-item>
                        <v-list-item href="https://github.com/designer-carlyn/password-generator-app" target="_blank" class="preview-link  preview-code">Source Code <v-icon small>fas fa-code</v-icon></v-list-item>
                    </div>
                </div>
                <div class="list-item" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="800">
                    <div class="item-image">
                        <img src="https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/url-shortening-link_zlomdqUydS.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1678074115351" alt="URL shortening API landing page">
                    </div>
                    <div class="item-info">
                        <div class="info-title">URL shortening API landing page</div>
                        <div class="info-tech">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS</li>
                                <li>API</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <v-list-item href="https://cs-url-shortening-link.netlify.app/" :ripple="false" target="_blank" class="preview-link preview-site">Preview Site <v-icon small>fas fa-external-link-alt</v-icon></v-list-item>
                        <v-list-item href="https://github.com/designer-carlyn/url-shortening-link" target="_blank" class="preview-link  preview-code">Source Code <v-icon small>fas fa-code</v-icon></v-list-item>
                    </div>
                </div>
                <div class="list-item" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">
                    <div class="item-image">
                        <img src="https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/tip-calculator-app_TwTR5hjoh2.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1678074114702" alt="Tip Calculator App">
                    </div>
                    <div class="item-info">
                        <div class="info-title">Tip Calculator App</div>
                        <div class="info-tech">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <v-list-item href="https://cs-tip-calculator.netlify.app/" :ripple="false" target="_blank" class="preview-link preview-site">Preview Site <v-icon small>fas fa-external-link-alt</v-icon></v-list-item>
                        <v-list-item href="https://github.com/designer-carlyn/tip-calculator-app" target="_blank" class="preview-link  preview-code">Source Code <v-icon small>fas fa-code</v-icon></v-list-item>
                    </div>
                </div>
                <div class="list-item" data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
                    <div class="item-image">
                        <img src="https://ik.imagekit.io/csdesigner/my_portfolio/recent_works/notification_page_2yEcQIrl1.webp?ik-sdk-version=javascript-1.4.3&updatedAt=1678068889281" alt="Notifications page">
                    </div>
                    <div class="item-info">
                        <div class="info-title">Notifications page</div>
                        <div class="info-tech">
                            <ul>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>JS</li>
                            </ul>
                        </div>
                    </div>
                    <div class="item-bottom">
                        <v-list-item href="https://cs-notification-page-solution.netlify.app/" :ripple="false" target="_blank" class="preview-link preview-site">Preview Site <v-icon small>fas fa-external-link-alt</v-icon></v-list-item>
                        <v-list-item href="https://github.com/designer-carlyn/notification-page" target="_blank" class="preview-link  preview-code">Source Code <v-icon small>fas fa-code</v-icon></v-list-item>
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
                
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/section/_portfolio.scss';
</style>