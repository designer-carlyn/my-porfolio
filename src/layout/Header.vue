<template>
    <div class="header">
        <v-container>
            <div class="header__cont">
                <div class="header-logo">
                    <img src="@/assets/image/logo_header.png" alt="">
                </div>
                <div class="header-link">
                    <router-link to="#">
                        <div class="link-item">HOME</div>
                    </router-link>
                    <router-link to="#">
                        <div class="link-item">ABOUT</div>
                    </router-link>
                    <router-link to="#">
                        <div class="link-item">PORTFOLIO</div>
                    </router-link>
                    <router-link to="#">
                        <div class="link-item">CONTACT</div>
                    </router-link>
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