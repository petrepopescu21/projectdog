<template>
<div style="height: 100%">
    <v-container fluid grid-list-xs fill-height v-if="!dog">
        <v-layout row wrap align-center>
          <v-flex class="text-xs-center">
                <template v-if="!ready"><h1>Cautam cainele</h1><h2>Hei cuțu, cuțu, cuțu...</h2></template>
                <template v-if="fourohfour"><h1>Nu am gasit acest câne</h1><v-btn color="error" dark v-on:click="$router.push({name:'dogs'})">Mergi inapoi</v-btn></template>
          </v-flex>
        </v-layout>
    </v-container>
    <template v-if="dog">
        <v-layout row wrap align-center>
            <v-flex>
                <div class="narrow">
                    <v-container fluid>
                        <div class="title-container">
                            <img width="150px" src="@/assets/colt_alb_negru.png">
                            <h1><p class="dog-title">{{dog.name}}</p></h1>
                            <h2>{{dog.rezumat}}</h2><br>
                        </div>
                        <p class="desc">{{dog.description}}</p>
                    </v-container>
                    <v-container fluid grid-list-xs>
                        <v-layout row wrap>
                            <v-flex xs4 v-for="(image,index) in dog.images" v-bind:key="image.id">
                                <img @click="$photoswipe.open(index, gallery)" width="100%" height="100%" alt="" v-bind:src="$i(image,300,300)" class="preview-img-item">
                            </v-flex>
                        </v-layout>
                    </v-container>
                </div>
          </v-flex>
        </v-layout>
      </template>
</div>
</template>

<script>
export default {
  data() {
    return {
      ready: false,
      fourohfour: false,
      dog: null
    };
  },
  computed: {
      gallery() {
          let maxw = 2500
          let maxh = 1500
          var ret = []
          this.dog.images.forEach(image=>{
              let s = {w:image.fields.file.details.image.width,h:image.fields.file.details.image.height}
              let f = {w:0,h:0}
              let ratio = s.w/s.h
              if(s.w>s.h)
                {
                    f.w=(s.w>maxw)?maxw:s.w
                    f.h=f.w/ratio
                }
              else {
                  f.h=(s.h>maxh)?maxh:s.h
                  f.w=f.h*ratio
              }
              ret.push({src:this.$i(image,1920,1200,false),w:f.w,h:f.h})
          })
          return ret
      }
  },
  created() {
    if (
      this.$store.state.cachedDogs[this.$route.params.id.toLowerCase()] == null
    )
      this.$c
        .getEntries({
          content_type: "dog",
          "fields.name[match]": this.$route.params.id
        })
        .then(response => {
          console.log(response);
          this.ready = true;
          if (response.total == 0) this.fourohfour = true;
          else {
            this.dog = response.items[0].fields;
            this.$store.commit("addDogToCache", this.dog);
          }
        });
    else {
      this.ready = true;
      this.dog = this.$store.state.cachedDogs[
        this.$route.params.id.toLowerCase()
      ];
      console.log("Cache hit");
    }
  }
};
</script>

<style scoped>
.preview-img-item {
    cursor: pointer;
}
.narrow {
  text-align: left;
}

.container {
  max-width: 1200px !important;
}

.dog-title {
  font-size: 180%;
  margin-bottom: 0;
}

.desc {
    font-size: 120%;
}
</style>
