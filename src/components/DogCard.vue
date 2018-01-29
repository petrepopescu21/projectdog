<template>
    
        <img v-bind:src="$i(dog.images[0],800,800)" width="100%" height="100%">
     
</template>

<script>
export default {
  props: ['dog']
}
</script>
