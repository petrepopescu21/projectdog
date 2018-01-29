<template>
<v-navigation-drawer
      v-model="drawer"
      light
      fixed
      absolute width="180" app>
      <drawer-logo></drawer-logo>
      <filters-list />
      </v-navigation-drawer>
</template>

<script>
import FiltersList from "@/components/Drawers/Parts/FiltersList";
import LinksList from "@/components/Drawers/Parts/LinksList";
import DrawerLogo from "@/components/Drawers/Parts/Logo";

export default {
  components: {FiltersList, LinksList, DrawerLogo},
  name: "filterdrawer",
  computed: {
    drawer: {
      get() {
        return this.$store.state["showFilters"];
      },
      set(val) {
        this.$store.commit("setShowFilters", val);
      }
    }
  }
};
</script>