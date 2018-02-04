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
                            <img class="page-logo" width="150px" src="@/assets/colt_alb_negru.png">
                            <h1><p class="dog-title">{{dog.name}}</p></h1>
                            <h2>{{dog.rezumat}}</h2><br>
                        </div>
                        <social-sharing :url='"https://coltalb.azurewebsites.net/dogs/"+dog.name+"/?lang="+lang' inline-template>
                          <div>
                            <network network="facebook">
                              <v-btn><v-icon>share</v-icon></v-btn>
                            </network>
                          </div>
                        </social-sharing>
                        
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
      multiLangDog: {}
    };
  },
  metaInfo() {
    if (this.dog == null) return { title: "Doggo" };
    else
      return {
        title: this.dog.name,
        meta: [
          { name: "description", content: this.dog.rezumat },
          { vmid: 'og:title', property: "og:title", content: this.dog.name },
          { vmid: 'og:description', property: 'og:description', content: this.dog.rezumat },
          { vmid: "og:image", property: 'og:image', content: this.$i(this.dog.images[0], 800, 800) },
          { vmid: "og:image:width", property: "og:image:width", content: "800"},
          { vmid: "og:image:height", property: "og:image:height", content: "800"}
        ]
      };
  },
  computed: {
    lang() {
      return this.$store.state.lang;
    },
    dog() {
      if (this.multiLangDog == {}) return null;
      return this.multiLangDog[this.lang];
    },
    largeThumbs() {
      return this.$store.state.largeThumbs;
    },
    gallery() {
      let maxw = 2500;
      let maxh = 1500;
      var ret = [];
      this.dog.images.forEach(image => {
        let s = {
          w: image.fields.file.details.image.width,
          h: image.fields.file.details.image.height
        };
        let f = { w: 0, h: 0 };
        let ratio = s.w / s.h;
        if (s.w > s.h) {
          f.w = s.w > maxw ? maxw : s.w;
          f.h = f.w / ratio;
        } else {
          f.h = s.h > maxh ? maxh : s.h;
          f.w = f.h * ratio;
        }
        ret.push({ src: this.$i(image, 1920, 1200, false), w: f.w, h: f.h });
      });
      return ret;
    }
  },
  created() {
    if (
      this.$store.state.cachedDogs[this.$route.params.id.toLowerCase()] == null
    ) {
      var ro = this.$c.getEntries({
        locale: "ro",
        content_type: "dog",
        "fields.name[match]": this.$route.params.id
      });

      var en = this.$c.getEntries({
        locale: "en",
        content_type: "dog",
        "fields.name[match]": this.$route.params.id
      });

      Promise.all([ro, en])
        .then(responses => {
          console.log(responses);
          this.ready = true;
          if (responses[0].total == 0) this.fourohfour = true;
          else {
            var output = {
              ro: responses[0].items[0].fields,
              en: responses[1].items[0].fields
            };
            delete output.en.images;
            output.en.images = output.ro.images;
            this.multiLangDog = output;
            this.$store.commit("addDogToCache", this.multiLangDog);
          }
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      this.ready = true;
      this.multiLangDog = this.$store.state.cachedDogs[
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
