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
    this.$store.commit("setLang", "ro");
    this.$c
      .getEntries({
        content_type: "dog",
        select: "fields.name,fields.images,fields.dataNasterii,fields.sex,fields.talie",
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

img {
  image-rendering: -webkit-optimize-contrast !important;
}

.pswp__counter {
  display: none !important;
}

@media screen and (min-width: 960px) {
  .container.grid-list-xs .layout .flex {
    padding: 4px
  }
}

@media screen and (max-width: 959px) {
  .page-logo {
    width: 70px !important;
  }
}

</style>
