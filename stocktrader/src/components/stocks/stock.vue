<template>
  <div id="qwerty">
    <div class="card">
      <div class="card-header">
        {{stock.name}}
        <small>(price:{{stock.price|currency}})</small>
      </div>
      <div class="card-body">
        <input type="number" placeholder="quantity" class="form-control" v-model.number="quantity" :class="{danger:insufficient}"/>
        <hr />
        <button
          class="btn btn-success"
          @click="buy"
          :disabled="quantity<0||!Number.isInteger(quantity)||insufficient"
        >{{insufficient?"Insufficient Funds":"Buy"}}</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
    buy() {
      const order = {
        stockId: this.stock.id,
        stockName: this.stock.name,
        price: this.stock.price,
        quantity: this.quantity
      };

      this.$store.dispatch("buyStock", order);
      this.quantity = 0;
    }
  },
  computed: {
    funds() {
      return this.$store.getters.funds;
    },
    insufficient() {
      return this.quantity * this.stock.price > this.funds;
    }
  }
};
</script>


<style  scoped>
#qwerty {
  padding: 5%;
  width: 47%;
}
.danger{
  border:1px solid red
}
</style>