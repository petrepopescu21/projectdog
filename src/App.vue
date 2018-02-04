<template>
      <router-view v-if="ready"></router-view>
</template>

<script>
export default {
  name: "App",
  metaInfo() {
    return {
      title: "",
      titleTemplate: "%s | Colt Alb",
      htmlAttrs: {
        lang: this.$store.state.lang
      },
      meta: [
        { charset: "utf-8" },
        { vmid: "og:locale", property: "og:locale", content: this.locale },
        {
          vmid: "og:locale:alternate",
          property: "og:locale:alternate",
          content: "en_US"
        },
        {
          vmid: "og:locale:alternate",
          property: "og:locale:alternate",
          content: "ro_RO"
        },
        {
          vmid: "og:url",
          property: "og:url",
          content: "https://coltalb.azurewebsites.net" + this.$route.fullPath
        },
        { vmid: "og:type", property: "og:type", content: "website" },
        {
          vmid: "fb:app_id",
          property: "fb:app_id",
          content: "205040653384174"
        },
        {
          vmid: "og:site_name",
          property: "og:site_name",
          content: "Fundația Colț Alb"
        },
        {
          vmid: "og:image",
          property: "og:image",
          content: "https://coltalb.azurewebsites.net/static/fblogo.png"
        },
        {
          vmid: "og:image:width",
          property: "og:image:width",
          content: "1024"
        },
        {
          vmid: "og:image:height",
          property: "og:image:height",
          content: "1024"
        }
      ]
    };
  },
  data() {
    return {
      labels: {},
      locale: "ro_RO"
    };
  },
  created() {
    let queryLocale = this.$route.query.lang || this.$route.query.fb_locale;
    let supportedLocale = this.$store.state.locales.filter(
      locale => queryLocale == locale.ext || queryLocale == locale.int
    )[0] || { int: "ro", ext: "ro_RO" };
    console.log(this.$route);
    this.locale = supportedLocale.ext;
    this.$store.commit("setLang", supportedLocale.int);
    this.$c
      .getEntries({
        content_type: "dog",
        select:
          "fields.name,fields.images,fields.dataNasterii,fields.sex,fields.talie",
        order: "fields.scor"
      })
      .then(response => this.$store.commit("setDogs", response.items))
      .catch(console.error);
    this.$router.replace(this.$route.path);
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
    padding: 4px;
  }
}

@media screen and (max-width: 959px) {
  .page-logo {
    width: 70px !important;
  }
}
</style>
