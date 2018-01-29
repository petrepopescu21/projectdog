<template>
<v-container fluid>
  <v-layout row class="filter-section">
    <v-flex xs12>
            <h4>Size</h4>
            <v-checkbox label="Small"
                        v-model="ex4"
                        hide-details></v-checkbox>
            <v-checkbox label="Medium"
                        v-model="ex4"
                        hide-details></v-checkbox>
            <v-checkbox label="Large"
                        v-model="ex4"
                        hide-details></v-checkbox>
    </v-flex>
  </v-layout>
  <v-layout row class="filter-section">
    <v-flex xs12>
            <h4>Age</h4>
            <v-checkbox label="Small"
                        v-model="ex4"
                        hide-details></v-checkbox>
            <v-checkbox label="Medium"
                        v-model="ex4"
                        hide-details></v-checkbox>
            <v-checkbox label="Large"
                        v-model="ex4"
                        hide-details></v-checkbox>
    </v-flex>
  </v-layout>
  <v-layout row class="filter-section">
    <v-flex xs12>
            <h4>Sex</h4>
            <v-checkbox label="Small"
                        v-model="ex4"
                        hide-details></v-checkbox>
            <v-checkbox label="Medium"
                        v-model="ex4"
                        hide-details></v-checkbox>
            <v-checkbox label="Large"
                        v-model="ex4"
                        hide-details></v-checkbox>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  name: "filters-list"
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
  }
</style>

