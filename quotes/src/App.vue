<template>
  <div class="container">
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuote"></app-header>
    <new-quote @newquote="newquote"></new-quote>
    <quote-grid :quotes="quotes" @quotedeleted="quotedeleted"></quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">CLICK ON A QUOTE TO DELETE IT</div>
      </div>
    </div>
  </div>
</template>

<script>
import quoteGrid from "./components/quoteGrid";
import newQuote from "./components/newQuote";
import appHeader from "./components/header";
export default {
  data: function() {
    return {
      quotes: ["ADD A QUOTE"],
      maxQuote: 15
    };
  },
  components: {
    quoteGrid,
    newQuote,
    appHeader
  },
  methods: {
    newquote(quote) {
      if (this.quotes.length == this.maxQuote)
        return alert("delete existing quote ...memory full");

      this.quotes.push(quote);
    },
    quotedeleted(index) {
      this.quotes.splice(index, 1);
    }
  }
};
</script>

<style></style>
