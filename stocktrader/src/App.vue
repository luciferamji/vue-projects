<template>
  <div class="container">
    <app-header></app-header>
    <div class="row">
      <div class="col-xs-12">
        <transition name="slide">
          <router-view></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./components/header";
export default {
  components: {
    appHeader: Header
  },
  created() {
    this.$store.dispatch("initStock");
  }
};
</script>

<style>
body {
  padding: 100 px;
}
.slide-enter-active {
  animation: slide-in 200ms ease-out forwards;
}

@keyframes slide-in {
  from {
    transform: translateY(-30px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

