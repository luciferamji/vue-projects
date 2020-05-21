<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="nav-link" to="/">Stock Trader App</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/portfolio">portfolio</router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/stocks">Stocks</router-link>
        </li>
      </ul>
      <ul class="navbar-nav mr-right">
        <li class="nav-item">
          <span class="navbar-text">
            <strong>Funds:{{funds|currency}}</strong>
          </span>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click="endDay()">End day</a>
        </li>

        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >save and load data</a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">save data</a>
            <a class="dropdown-item" href="#">load data</a>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  computed: {
    funds() {
      return this.$store.getters.funds;
    }
  },
  methods: {
    endDay() {
      this.$store.dispatch("rndStocks");
    }
  }
};
</script>