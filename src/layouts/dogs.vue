<template>
<v-app>
    <top-toolbar />
    <nav-drawer />
<v-content>
        <v-container fluid><h1><p class="dog-title">Adopta</p></h1><h3><p class="dog-title">Ei sunt cainii nostri</p></h3></v-container>
        <v-container fluid grid-list-xs>
            <router-view />
        </v-container>
  </v-content>
  <v-footer></v-footer>
</v-app>
</template>

<script>
import NavDrawer from "@/components/Drawers/NavDrawer";
import TopToolbar from "@/components/Toolbars/TopToolbar";
export default {
  components: { NavDrawer, TopToolbar },
  created() {
      this.$store.commit('setShowNav',null)
  }
};
</script>

<style scoped>
    .dog-title {
        font-size: 180%;
    }
    p {
        margin-bottom: 0;
    }
</style>
