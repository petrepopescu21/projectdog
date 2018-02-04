<template>
<div>
    <v-container fluid>
        <v-layout row justify-space-between>
            <v-flex xs12 md9>
                <img width="150px" src="@/assets/colt_alb_negru.png">
                <h1><p class="dog-title">Adopta</p></h1>
                <h3><p class="dog-title">Ei sunt cainii nostri</p></h3>
            </v-flex>
            <v-flex xs3 class="hidden-xs-only text-xs-right">
                <v-btn color="primary" @click.stop="dialog2 = true" class="filter-button" dark>Filtreaza</v-btn>
            </v-flex>
        </v-layout>
              <v-btn class="hidden-sm-and-up" fixed
              dark
              fab
              bottom
              right
              color="primary" @click.stop="dialog2 = true"><v-icon>sort</v-icon></v-btn>
      
    </v-container>
  <v-container fluid grid-list-xs>
    <v-layout row wrap>
        <v-flex xs4 lg4 v-for="dog in dogs" v-bind:key="dog.name">
        <dog-card v-bind:dog="dog.fields"></dog-card>
        </v-flex>
    </v-layout>
  </v-container>

  <v-dialog v-model="dialog2" max-width="500px">
        <v-card>
          <v-card-title>
            Aici mai am de lucru
          </v-card-title>
          <v-card-text>
             <v-checkbox v-bind:label="l.talie.s"
                        v-model="ex4"
                        hide-details></v-checkbox>
            <v-checkbox v-bind:label="l.talie.m"
                        v-model="ex4"
                        hide-details></v-checkbox>
            <v-checkbox v-bind:label="l.talie.l"
                        v-model="ex4"
                        hide-details></v-checkbox>
          </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat @click.stop="dialog2=false">Close</v-btn>
          </v-card-actions>
        </v-card>
   </v-dialog>


</div>
</template>

<script>
import DogCard from "@/components/DogCard";
export default {
    data() {
        return {
            dialog2: false
        }
    },
  components: { DogCard },
  metaInfo: {
    title: "Dogs"
  },
  computed: {
    dogs() {
      return this.$store.state.dogs;
    },
    l() {
        return this.$store.state.labels.filtre
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
.dog-title {
  font-size: 180%;
}
p {
  margin-bottom: 0;
}
.filter-button {
    top: 85%;
}
</style>
