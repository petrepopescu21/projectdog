<template>
      <router-view v-if="ready"></router-view>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "Colt Alb",
    titleTemplate: "%s | Colt Alb"
  },
  data() {
    return {
      labels: {}
    };
  },
  created() {
    this.$store.commit('setLang','en')
  },
  computed: {
    ready() {
      return this.$store.state.ready
    }
  }
};
</script>

<style>

</style>
