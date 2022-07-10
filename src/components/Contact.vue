<template>
    <div class="contact" id="contact">
        <v-container>
            <div class="contact__form">
                <div class="section-title" data-aos="fade-up" data-aos-duration="800" data-aos-delay="200">Let's keep <br> in touch</div>
                <div class="contact-info">
                    <div class="info-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
                        <div class="icon">
                            <img src="@/assets/image/icons/contact-phone.png" alt="">
                        </div>
                        <div class="content">
                            <h4>Call me now</h4>
                            <h3>+6395 847 6365</h3>
                        </div>
                    </div>
                    <div class="info-item" data-aos="fade-right" data-aos-duration="800" data-aos-delay="600">
                        <div class="icon">
                            <img src="@/assets/image/icons/contact-email.png" alt="">
                        </div>
                        <div class="content">
                            <h4>Chat with me</h4>
                            <h3>carlosegovia5@gmail.com</h3>
                        </div>
                    </div>
                </div>
                <div class="contact-map" data-aos="zoom-in" data-aos-duration="800" data-aos-delay="800">
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