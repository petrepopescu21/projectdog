<template>
  <div>
    <v-container fluid>
      <v-layout row justify-space-between>
        <v-flex xs12 md9>
          <img width="150px" class="page-logo" src="@/assets/colt_alb_negru.png">
          <h1>
            <p class="dog-title">Adopta</p>
          </h1>
          <h3>
            <p class="dog-title">Ei sunt cainii nostri</p>
          </h3>
        </v-flex>
        <v-flex xs3 class="hidden-xs-only text-xs-right">
          <v-btn color="primary" @click.stop="dialog2 = true" class="filter-button" dark>Filtreaza</v-btn>
        </v-flex>
      </v-layout>
      <v-btn class="hidden-sm-and-up" fixed dark fab bottom right color="primary" @click.stop="dialog2 = true">
        <v-icon>sort</v-icon>
      </v-btn>
    </v-container>
    <v-container fluid grid-list-xs>
      <v-layout row wrap>
        <v-flex xs4 v-for="dog in filteredDogs" v-bind:key="dog.name">
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
          <v-checkbox v-bind:label="l.talie.s" v-model="filters.talie.mica" hide-details></v-checkbox>
          <v-checkbox v-bind:label="l.talie.m" v-model="filters.talie.medie" hide-details></v-checkbox>
          <v-checkbox v-bind:label="l.talie.l" v-model="filters.talie.mare" hide-details></v-checkbox>
          <v-checkbox v-bind:label="l.varsta.pui" v-model="filters.age.s" hide-details></v-checkbox>
          <v-checkbox v-bind:label="l.varsta.tanar" v-model="filters.age.m" hide-details></v-checkbox>
          <v-checkbox v-bind:label="l.varsta.adult" v-model="filters.age.l" hide-details></v-checkbox>
          <v-checkbox v-bind:label="l.sex.m" v-model="filters.sex.M" hide-details></v-checkbox>
          <v-checkbox v-bind:label="l.sex.f" v-model="filters.sex.F" hide-details></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-btn color="primary" flat @click.stop="dialog2=false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import Moment from "moment";
import DogCard from "@/components/DogCard";
export default {
  data() {
    return {
      dialog2: false,
      ex4: false
    };
  },
  components: {
    DogCard
  },
  metaInfo() {
    return {
      title: "Supercăței",
      meta: [
          { name: "description", content: "Patrupezi fără pereche" },
          { vmid: 'og:title', property: "og:title", content: "Supercăței | Colț Alb" },
          { vmid: 'og:description', property: 'og:description', content: "Patrupezi fără pereche" }
      ]
    }
  },
  computed: {
    dogs() {
      return this.$store.state.dogs;
    },
    l() {
      return this.$store.state.labels.filtre;
    },
    filters() {
      return this.$store.state.filters;
    },
    allDogs() {
      var talie =
        this.filters.talie.mica == this.filters.talie.medie &&
        this.filters.talie.medie == this.filters.talie.mare;
      var age =
        this.filters.age.s == this.filters.age.m &&
        this.filters.age.m == this.filters.age.l;
      var sex = this.filters.sex.M == this.filters.sex.F;
      return {
        age: age,
        talie: talie,
        sex: sex
      };
    },
    filteredDogs() {
      if (
        this.allDogs.talie == true &&
        this.allDogs.age == true &&
        this.allDogs.sex == true
      )
        return this.dogs;
      return this.dogs.filter(dog => {
        return (
          (this.filters.talie[dog.fields.talie] == true ||
            this.allDogs.talie == true) &&
          (this.filters.sex[dog.fields.sex] == true ||
            this.allDogs.sex == true) &&
          (this.filters.age[this.calcAge(dog.fields.dataNasterii)] == true ||
            this.allDogs.age == true)
        );
      });
    }
  },
  methods: {
    calcAge(dob) {
      var a = Moment(dob, "YYYY-MM-DD");
      var age = Moment().diff(a, "months");
      if (age <= 8) return "s";
      if (age <= 24) return "m";
      return "l";
    }
  },
  watched: {
    filters(val) {
      this.$store.commit("setFilters", val);
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
