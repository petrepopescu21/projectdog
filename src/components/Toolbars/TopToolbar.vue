<template>
    <v-toolbar app class="white grey--text" height="64px" dark flat>
        <v-toolbar-side-icon flat light color="grey darken-1" class="hidden-lg-and-up" @click.stop="toggleDrawer()"><i aria-hidden="true" class="material-icons icon">{{icon}}</i></v-toolbar-side-icon>
        <v-spacer></v-spacer>
        <div class="hidden-md-and-down">
            <v-btn class="heavy-text" flat color="grey darken-1">{{l.contact}}</v-btn>
            <router-link  :to="{name:'home'}"><v-btn class="heavy-text" flat color="grey darken-1">{{l.desprenoi}}</v-btn></router-link>
            <router-link  :to="{name:'dogs'}"><v-btn class="heavy-text" flat color="grey darken-1">{{l.adopta}}</v-btn></router-link>
            <v-btn class="heavy-text" flat color="grey darken-1">{{l.blog}}</v-btn>
        </div>
        <v-btn raised color="accent" dark>{{l.doneaza}}</v-btn>
        <v-menu>
        <v-btn class="heavy-text" flat color="grey darken-1" slot="activator">{{x}}</v-btn>
        <v-list>
            <v-list-tile v-for="lang in langs" :key="lang" @click="changeLang(lang)">
                <v-list-tile-title color="grey darken-1" class="heavy-text">{{ lang }}</v-list-tile-title>
            </v-list-tile>
        </v-list>
        </v-menu>
    </v-toolbar>
</template>

<script>
export default {
    name: "toptoolbar",
    data() {
        return {
            langs: ['en','ro','de']
        }
    },
    methods: {
        toggleDrawer() {

            let modifier = 'setShowNav'
            this.$store.commit(modifier,!this.$store.state[modifier])
        },
        changeLang(lang) {
            this.$store.commit('setLang',lang)
        }
    },
    computed: {
        l() {
            return this.$store.state.labels.navbar
        },
        x() {
            return this.$store.state.lang
        },
        
        icon() {
            if(this.$route.name=="caini")
                return 'sort'
            else return 'menu'
        }
    }
}
</script>

<style>
.heavy-text {
    font-weight: 700;
    text-transform: uppercase;
}
</style>