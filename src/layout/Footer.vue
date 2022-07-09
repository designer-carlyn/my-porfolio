<template>
    <div class="footer">
        <v-container>
            <div class="footer__cont">
                <div class="footer-logo">
                    <img src="@/assets/image/logo_footer.png" alt="">
                </div>
                <div class="footer-nav">
                    <a href="#splash" v-smooth-scroll>
                        <div class="nav-item">HOME</div>
                    </a>
                    <a href="#about" v-smooth-scroll>
                        <div class="nav-item">ABOUT</div>
                    </a>
                    <a href="#expertise" v-smooth-scroll>
                        <div class="nav-item">EXPERTISE</div>
                    </a>
                    <a href="#portfolio" v-smooth-scroll>
                        <div class="nav-item">PORTFOLIO</div>
                    </a>
                    <a href="#contact" v-smooth-scroll>
                        <div class="nav-item">CONTACT</div>
                    </a>
                </div>
                <div class="footer-trademark">
                    <h4>© 2022 Carlo Segovia</h4>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Footer'
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/layout/_footer.scss';
</style>