<template>
    
        <img v-bind:src="$i(dog.images[0],300,300)">
     
</template>

<script>
export default {
  props: ['dog']
}
</script>
