<template>
<v-navigation-drawer temporary
      v-model="drawer"
      light
      fixed
      absolute app></v-navigation-drawer>
</template>

<script>
export default {
    name: "navdrawer",
    computed: {
        drawer: {
            get() {
            return this.$store.state['showNav']
            },
            set(val) {
                this.$store.commit('setShowNav',val)
            }
        }
    }
}
</script>