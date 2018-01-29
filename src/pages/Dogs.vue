<template>
  <v-layout row wrap>
    <v-flex xs12 sm6 md4 lg3 v-for="dog in dogs" v-bind:key="dog.name">
      <dog-card v-bind:dog="dog.fields"></dog-card>
    </v-flex>
  </v-layout>
</template>

<script>
import DogCard from '@/components/DogCard'
export default {
  components: {DogCard},
  metaInfo: {
    title: "Dogs"
  },
  computed: {
    dogs() {
      return this.$store.state.dogs
    }
  },
  created() {
    if (this.$store.state.dogs == null)
      this.$c
        .getEntries({
          content_type: "dog",
          select: "fields.name,fields.images",
          order: "fields.scor"
        })
        .then(response => this.$store.commit("setDogs", response.items))
        .catch(console.error)
  }
};
</script>
