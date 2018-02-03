<template>
<div>
  <v-toolbar flat>
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Filtreaza caini
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-divider></v-divider>
  <v-container fluid>
  <v-layout row class="filter-section">
    <v-flex xs12>
            <h4>{{l.talie._}}</h4>
            <v-checkbox v-bind:label="l.talie.s"
                        v-model="ex4"
                        hide-details></v-checkbox>
            <v-checkbox v-bind:label="l.talie.m"
                        v-model="ex4"
                        hide-details></v-checkbox>
            <v-checkbox v-bind:label="l.talie.l"
                        v-model="ex4"
                        hide-details></v-checkbox>
    </v-flex>
  </v-layout>
  <v-layout row class="filter-section">
    <v-flex xs12>
            <h4>{{l.varsta._}}</h4>
            <v-checkbox v-bind:label="l.varsta.pui"
                        v-model="ex4"
                        hide-details></v-checkbox>
            <v-checkbox v-bind:label="l.varsta.tanar"
                        v-model="ex4"
                        hide-details></v-checkbox>
            <v-checkbox v-bind:label="l.varsta.adult"
                        v-model="ex4"
                        hide-details></v-checkbox>
    </v-flex>
  </v-layout>
  <v-layout row class="filter-section">
    <v-flex xs12>
            <h4>{{l.sex._}}</h4>
            <v-checkbox v-bind:label="l.sex.m"
                        v-model="ex4"
                        hide-details></v-checkbox>
            <v-checkbox v-bind:label="l.sex.f"
                        v-model="ex4"
                        hide-details></v-checkbox>
    </v-flex>
  </v-layout>
  </v-container>
</div>
</template>

<script>
export default {
  name: "filters-list",
  data() {
    return {
      ex4: false
    }
  },
  computed: {
    l() {
      return this.$store.state.labels.filtre;
    }
  }
};
</script>

<style>
.filter-section {
  margin-top: 10px;
  margin-bottom: 20px;
}

h4 {
  color: #555;
  margin-left: 3px;
  font-size: 18px;
  font-weight: 400;
  text-transform: capitalize;
}
</style>

