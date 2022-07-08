<template>
    <div class="header-mobile">
        <v-container>
            <div class="header-mobile__cont">
                <div class="header-mobile-logo">
                    <img src="@/assets/image/logo_header.png" alt="">
                </div>
                <div class="header-mobile-hamburger" @click="openSidenav()">
                    <div class="hamburger-lines"></div>
                </div>
            </div>
        </v-container>
        <div class="sidenav" :class="{ active : isOpen }">
            <a href="#splash" v-smooth-scroll @click="closeSidenav()">
                <div class="sidenav-item">
                    <v-icon small>fas fa-home</v-icon>
                </div>
            </a>
            <a href="#about" v-smooth-scroll @click="closeSidenav()">
                <div class="sidenav-item">
                    <v-icon small>fas fa-user-circle</v-icon>
                </div>
            </a>
            <a href="#expertise" v-smooth-scroll @click="closeSidenav()">
                <div class="sidenav-item">
                    <v-icon small>fas fa-code</v-icon>
                </div>
            </a>
            <a href="#portfolio" v-smooth-scroll @click="closeSidenav()">
                <div class="sidenav-item">
                    <v-icon small>fas fa-project-diagram</v-icon>
                </div>
            </a>
            <a href="#contact" v-smooth-scroll @click="closeSidenav()">
                <div class="sidenav-item">
                    <v-icon small>fas fa-phone-volume</v-icon>
                </div>
            </a>
        </div>
        <div class="overlay" :class="{ active : isOpen }" @click="closeSidenav()"></div>
    </div>
</template>

<script>
    export default {
        name: 'HeaderMobile',

        data() {
            return {
                isOpen: false,
            }
        },

        methods: {
            openSidenav() {
                this.isOpen = true
            },
            closeSidenav() {
                this.isOpen = false
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/layout/_header-mobile.scss';
</style>