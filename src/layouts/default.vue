<template>
<v-app toolbar--fixed toolbar style="overflow: hidden">
      <nav-drawer />
      <top-toolbar />
        <v-content>
          <v-container fluid class="p-0">
            <router-view />
          </v-container>
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

<style>
.p-0 {
  padding: 0;
}


</style>