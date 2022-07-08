<template>
    <div class="expertise" id="expertise">
        <v-container>
            <div class="expertise__row">
                <v-row>
                    <v-col class="d-flex align-center" cols="12" xl="5" lg="5" md="5" sm="12" xs="12">
                        <div class="expertise-info">
                            <h1 class="section-title">My expertise <br> area</h1>
                            <p>I'm knowledgeable in different tools and frameworks until now that I can apply in creating webpage, mockups and website templates.</p>
                        </div>
                    </v-col>
                    <v-col cols="12" xl="7" lg="7" md="7" sm="12" xs="12">
                        <div class="expertise-content">
                            <div class="expertise-tab">
                                <div class="tab-link">
                                    <v-btn v-model="skills" class="btn-custom-light" :class="{ active: skills }" @click="showSkills()" x-large>Skills & Tools <v-icon class="ml-3" small>fas fa-code</v-icon></v-btn>
                                    <v-btn v-model="experience" class="btn-custom-light" :class="{ active: experience }" @click="showExperience()" x-large>Experience <v-icon class="ml-3" small>fas fa-briefcase</v-icon></v-btn>
                                    <v-btn v-model="education" class="btn-custom-light" :class="{ active: education }" @click="showEducation()" x-large>Education <v-icon class="ml-3" small>fas fa-graduation-cap</v-icon></v-btn>
                                </div>
                                <div class="tab-content">
                                    <v-expand-transition>
                                        <div class="skills-content" v-if="skills" transition="scroll-x-transition">
                                            <div class="skills-grid">
                                                <div class="item" v-for="(item, i) in skillsItem" :key="i">
                                                    <div class="icon">
                                                        <img :src="item.icon" alt="">
                                                    </div>
                                                    <h4>{{ item.name }}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </v-expand-transition>
                                    <v-expand-transition>
                                        <div class="experience-content" v-if="experience" transition="scroll-x-transition">
                                            <div class="experience-grid">
                                                <div class="item" v-for="(item, i) in experienceItem" :key="i">
                                                    <div class="item-date">{{ item.date }}</div>
                                                    <div class="item-company">{{ item.company }}</div>
                                                    <div class="item-divider"></div>
                                                    <div class="item-position">{{ item.position }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </v-expand-transition>
                                    <v-expand-transition>
                                        <div class="education-content" v-if="education" transition="scroll-x-transition">
                                            <div class="education-grid">
                                                <div class="item" v-for="(item, i) in educationItem" :key="i">
                                                    <div class="item-date">{{ item.date }}</div>
                                                    <div class="item-school">{{ item.school }}</div>
                                                    <div class="item-divider"></div>
                                                    <div class="item-course">{{ item.course }}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </v-expand-transition>
                                </div>
                            </div>
                        </div>
                    </v-col>
                </v-row>
            </div>
        </v-container>
    </div>
</template>

<script>
    export default {
        name: 'Expertise',

        data() {
            return {
                skills: true,
                experience: false,
                education: false,
                skillsItem: [{
                    icon: require('@/assets/image/icons/adobe-photoshop.png'),
                    name: 'Adobe Photoshop'
                },
                {
                    icon: require('@/assets/image/icons/adobe-illustrator.png'),
                    name: 'Adobe Illustrator'
                },
                {
                    icon: require('@/assets/image/icons/adobe-xd.png'),
                    name: 'Adobe XD'
                },
                {
                    icon: require('@/assets/image/icons/js.png'),
                    name: 'Javascript'
                },
                {
                    icon: require('@/assets/image/icons/html.png'),
                    name: 'HTML'
                },
                {
                    icon: require('@/assets/image/icons/css-3.png'),
                    name: 'CSS'
                },
                {
                    icon: require('@/assets/image/icons/sass.png'),
                    name: 'SASS'
                },
                {
                    icon: require('@/assets/image/icons/vuejs.png'),
                    name: 'VueJS'
                },
                {
                    icon: require('@/assets/image/icons/jquery.png'),
                    name: 'JQuery'
                },
                {
                    icon: require('@/assets/image/icons/github.png'),
                    name: 'Git'
                },
                {
                    icon: require('@/assets/image/icons/vuetify.png'),
                    name: 'Vuetify'
                },
                {
                    icon: require('@/assets/image/icons/bootstrap.png'),
                    name: 'Bootstrap'
                },],
                experienceItem: [{
                    date: '2022 (Feb) - Present',
                    company: 'Alpha PhilIndo Solution Inc.',
                    position: 'Programmer'
                },
                {
                    date: '2020 (Jan) - 2022 (Jan)',
                    company: 'MPOTECH Digital System Inc.',
                    position: 'Web Developer'
                },
                {
                    date: '2018 (Feb) - 2019 (Dec)',
                    company: 'Digima Web Solution Inc.',
                    position: 'Web Designer'
                },],
                educationItem: [{
                    date: '2014 - 2018',
                    school: 'STI College Sta. Maria, Bulacan',
                    course: 'B.S in Information Technology'
                },]
            }
        }, 

        methods: {
            showSkills() {
                this.skills = true
                this.experience = false
                this.education = false
            },
            showExperience() {
                this.skills = false
                this.experience = true
                this.education = false
            },
            showEducation() {
                this.skills = false
                this.experience = false
                this.education = true
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '@/assets/scss/section/_expertise.scss';
</style>