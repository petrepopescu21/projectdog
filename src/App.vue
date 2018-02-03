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
    this.$store.commit("setLang", "en");
    this.$c
      .getEntries({
        content_type: "dog",
        select: "fields.name,fields.images",
        order: "fields.scor"
      })
      .then(response => this.$store.commit("setDogs", response.items))
      .catch(console.error);
  },
  computed: {
    ready() {
      return this.$store.state.ready;
    }
  }
};
</script>

<style>
a {
  text-decoration: none;
}
</style>
