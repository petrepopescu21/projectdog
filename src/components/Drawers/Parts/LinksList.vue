<template>
<div>
<v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Navigate
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
  <v-list >
      <v-list-tile v-for="item in items" :key="item.title" v-on:click="$router.push({name:item.route})">
        <v-list-tile-content>
          <v-list-tile-title>{{ l[item.title] }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    <v-divider></v-divider>
    </div>
</template>

<script>
export default {
  name: "links-list",
  data() {
    return {
      items: [{ title: "desprenoi", route:"home" }, { title: "adopta", route:"dogs" }]
    };
  },
  computed: {
   l() {
            return this.$store.state.labels.navbar
        },
  }
};
</script>
