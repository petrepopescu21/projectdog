<template>
    <div class="dog-container" v-on:click="$router.push('/dogs/'+dog.name)">
        <img class="image" v-bind:src="$i(dog.images[0],800,800)" width="100%" height="100%">
        <div class="overlay">
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
.dog-container {
  position: relative;
  height: 98.75%;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(3,169,244,0.7);
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
