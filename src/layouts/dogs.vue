<template>
<v-app>
    <top-toolbar />
    <nav-drawer />
<v-content>
        <v-container fluid grid-list-md>
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
