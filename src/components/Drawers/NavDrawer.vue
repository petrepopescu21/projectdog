<template>
<v-navigation-drawer temporary
      v-model="drawer"
      light
      fixed
      absolute 
      app
      width="180">
      <drawer-logo></drawer-logo>
      </v-navigation-drawer>
</template>

<script>
import DrawerLogo from '@/components/Drawers/Parts/Logo'
export default {
  components: { DrawerLogo },
  name: "navdrawer",
  computed: {
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