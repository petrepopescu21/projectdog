<template>
<div>
    <h1 v-if="!ready">Loading Dog</h1>
    <h1 v-if="fourohfour">Dog not found</h1>
    <h1 v-if="dog">Hello, {{dog.name}}</h1>
</div>
</template>

<script>
export default {
    data() {
        return {
            ready: false,
            fourohfour: false,
            dog: null
        }
    },
    created() {
    if(this.$store.state.cachedDogs[this.$route.params.id.toLowerCase()]==null)
      this.$c
      .getEntries({
        content_type: "dog",
        "fields.name[match]": this.$route.params.id
      }).then(response=>{
          console.log(response)
          this.ready = true
          if(response.total==0)
            this.fourohfour = true
          else {
              this.dog = response.items[0].fields
              this.$store.commit('addDogToCache',this.dog)
          }
      })
    else {
        this.ready = true
        this.dog = this.$store.state.cachedDogs[this.$route.params.id.toLowerCase()]
        console.log("Cache hit")}
    }
}
</script>