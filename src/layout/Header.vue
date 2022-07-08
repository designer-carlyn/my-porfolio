<template>
    <div class="header">
        <v-container>
            <div class="header__cont">
                <div class="header-logo">
                    <img src="@/assets/image/logo_header.png" alt="">
                </div>
                <div class="header-link">
                    <a href="#splash" v-smooth-scroll>
                        <div class="link-item">HOME</div>
                    </a>
                    <a href="#about" v-smooth-scroll>
                        <div class="link-item">ABOUT</div>
                    </a>
                    <a href="#expertise" v-smooth-scroll>
                        <div class="link-item">EXPERTISE</div>
                    </a>
                    <a href="#portfolio" v-smooth-scroll>
                        <div class="link-item">PORTFOLIO</div>
                    </a>
                    <a href="#contact" v-smooth-scroll>
                        <div class="link-item">CONTACT</div>
                    </a>
                </div>
                <div class="header-button">
                    <v-btn class="btn-custom" x-large>Resume <v-icon class="ml-3" small>fas fa-download</v-icon></v-btn>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/layout/_header.scss';
</style>