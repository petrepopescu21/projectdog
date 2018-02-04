<template>
    <div class="dog-container" v-on:click="$router.push('/dogs/'+dog.name.toLowerCase())">
        <img class="image" v-bind:src="$i(dog.images[0],800,800)" width="100%" height="100%">
        <div class="hidden-sm-and-down overlay">
            <div class="text">{{dog.name}}</div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["dog"]
};
</script>

<style scoped>
.image {
  display: block
}
.dog-container {
  position: relative;
  cursor: pointer;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(3,169,244,0.4);
}

.dog-container:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 40px;
  text-transform: uppercase;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}
</style>
