<template>
    <div class="contact">
        <v-container>
            <div class="contact__form">
                <div class="section-title">Let's keep <br> in touch</div>
                <div class="contact-info">
                    <div class="info-item">
                        <div class="icon">
                            <img src="@/assets/image/icons/contact-phone.png" alt="">
                        </div>
                        <div class="content">
                            <h4>Call me now</h4>
                            <h3>+6395 847 6365</h3>
                        </div>
                    </div>
                    <div class="info-item">
                        <div class="icon">
                            <img src="@/assets/image/icons/contact-email.png" alt="">
                        </div>
                        <div class="content">
                            <h4>Chat with me</h4>
                            <h3>carlosegovia5@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div class="contact-map">
                    <div class="map-icon">
                        <img src="@/assets/image/icons/contact-map.png" alt="">
                    </div>
                </div>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Contact',
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/section/_contact.scss';
</style>