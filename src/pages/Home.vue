<template>
  <div>
    <v-parallax jumbotron class="jumbo">
      <div class="recenter">
        <img src="@/assets/colt_alb_alb.png" class="logo-image">
        <div class="coltalb-slogan">{{l.titlu.top}}<br>{{l.titlu.bot}}</div>
      </div>
    </v-parallax>
    <v-btn absolute dark fab color="pink" class="fab-scroll">
    <v-icon>expand_more</v-icon>
    </v-btn>
  </div>
</template>


<script>
export default {
  metaInfo() {
    return {
      title: "Titlu"
    };
  },

  computed: {
    l() {
      return this.$store.state.labels;
    }
  }
};
</script>

<style scoped>
.jumbo {
  min-height: 88vh;
  align-items: center;
  position: relative;
  /*height: calc(100vh - 112px);*/
  width: auto;
  background-color: #f3f3f3;
  background: linear-gradient(rgba(3, 169, 244, 0.25), rgba(3, 169, 244, 0.45)),
    url(../assets/elisa.jpg);
  background-size: cover;
}

.logo-image {
  height: 100%;
}

.recenter {
  height: 50%;
  display: flex;
  justify-content: center;
}

.coltalb-slogan {
  font-size: 52px;
  padding-top: 24px;
  align-self: flex-end;
  text-align: left;
  margin-left: 25px;
  font-family: Roboto, sans-serif;
  line-height: 60px;
  text-transform: uppercase;
  font-weight: 500;
}

.fab-scroll {
  z-index: 3;
  right: 20%;
  top: calc(88vh + 35px);
  position: aboslute;
}

@media (max-width: 900px) {
  .coltalb-be-together-section {
    height: 350px;
  }

  .jumbo {
    max-height: 600px;
  }

  .coltalb-slogan {
    align-self: center;
    line-height: normal;
    font-size: 25px;
    margin: 0 16px;
    padding-top: 8px;
  }

  .logo-image {
    height: 200px;
  }
  .recenter {
    flex-direction: column;
    width: auto;
    align-items: center;
  }
}
</style>
