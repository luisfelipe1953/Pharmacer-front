<script>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";

export default {
  components: {
    Menu,
  },
};
</script>

<template>
  <Menu />
  <div>
    <RouterView />
  </div>
</template>
