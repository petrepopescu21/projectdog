<template>
  <div class="bg">
      <img src="@/assets/colt_alb_alb.png">
      <!-- <div class="logo-font coltalb-slogan">{{l.titlu.top}}<br>{{l.titlu.bot}}</div> -->
  </div>
</template>

<script>
export default {
  name: "drawer-logo",
  computed: {
    l() {
      return this.$store.state.labels;
    }
  }
};
</script>
<style scoped>
.bg {
  background: rgb(3,169,244);
  display: flex;
  padding: 24px;
  justify-content: center;
}

.bg > img {
  height: 120px;
}

.coltalb-slogan {
  color: white;
  font-size: 18px;
  padding-top: 24px;
  align-self: flex-end;
  text-align: left;
  margin-left: 6px;
  font-family: Roboto, sans-serif;
  line-height: 22px;
  text-transform: uppercase;
  font-weight: 500;
}
</style>

,
