<template>
  <v-layout row wrap>
    <v-flex xs4 lg3 v-for="dog in dogs" v-bind:key="dog.name">
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
  }
};
</script>
