<template>
  <div class="app-wrapper">
    <app-header></app-header>
    <router-view />
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader";
import AppFooter from "./components/AppFooter";
export default {
  components: {
    AppHeader,
    AppFooter
  }
};
</script>

<style lang="scss" scoped></style>
