<template>
  <div id="app">
    <router-view></router-view>
    <FootGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
import axios from "axios";
import FootGuide from "./components/FootGuide/FootGuide.vue";
import { mapActions } from "vuex";
export default {
  name: "App",
  components: { FootGuide },
  mounted(){
    this.$store.dispatch('getUserData');
    this.$store.dispatch("getAddress");
    this.$store.dispatch("getNavigation");
  },
  data() {
    return {
      content: ""
    };
  },

};
</script>

<style lang="scss">
$color-primary: #08f;
.mint-header {
  background-color: $color-primary;
}

.iconfont {
  font-size: 20px;
}
</style>
