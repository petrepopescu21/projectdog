<template>
<v-app toolbar--fixed toolbar style="overflow: hidden">
      <nav-drawer />
      <top-toolbar />
        <v-content>
            <router-view />
        </v-content>
      <v-footer app></v-footer>
    </v-app>
</template>

<script>
import NavDrawer from '@/components/Drawers/NavDrawer'
import TopToolbar from '@/components/Toolbars/TopToolbar'
export default {
    components: {NavDrawer,TopToolbar},
    created() {
      this.$store.commit('setShowNav',false)
    }
}
</script>