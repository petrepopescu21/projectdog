<template>
<v-navigation-drawer v-bind:temporary="!showFilters"
      v-model="drawer"
      light
      fixed
      absolute 
      app
      width="360">
      <drawer-logo></drawer-logo>
      <links-list class="hidden-lg-and-up" />
      <filters-list v-if="showFilters"/>
      </v-navigation-drawer>
</template>

<script>
import DrawerLogo from '@/components/Drawers/Parts/Logo'
import LinksList from "@/components/Drawers/Parts/LinksList";
import FiltersList from "@/components/Drawers/Parts/FiltersList";
export default {
  components: { DrawerLogo, LinksList, FiltersList },
  name: "navdrawer",
  computed: {
    showFilters() {
      return (this.$route.name=="dogs")?true:false
    },
    drawer: {
      get() {
        return this.$store.state["showNav"];
      },
      set(val) {
        this.$store.commit("setShowNav", val);
      }
    }
  }
};
</script>