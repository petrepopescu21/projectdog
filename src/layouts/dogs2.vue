<template>
<v-app>
    <top-toolbar />
    <nav-drawer />
    <v-content>
        <router-view />
    </v-content>
  <v-footer app/>
</v-app>
</template>

<script>
import NavDrawer from "@/components/Drawers/NavDrawer";
import TopToolbar from "@/components/Toolbars/TopToolbar";
export default {
  components: { NavDrawer, TopToolbar },
  created() {
    this.$store.commit("setShowNav", null);
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
