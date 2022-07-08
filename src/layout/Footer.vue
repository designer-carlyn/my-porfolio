<template>
    <div class="footer">
        <v-container>
            <div class="footer__cont">
                <div class="footer-logo">
                    <img src="@/assets/image/logo_footer.png" alt="">
                </div>
                <div class="footer-nav">
                    <router-link to="#">
                        <div class="nav-item">HOME</div>
                    </router-link>
                    <router-link to="#">
                        <div class="nav-item">ABOUT</div>
                    </router-link>
                    <router-link to="#">
                        <div class="nav-item">PORTFOLIO</div>
                    </router-link>
                    <router-link to="#">
                        <div class="nav-item">CONTACT</div>
                    </router-link>
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