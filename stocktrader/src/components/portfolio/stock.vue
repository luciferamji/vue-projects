<template>
  <div id="qwerty">
    <div class="card">
      <div class="card-header">
        {{stock.name}}
        <small>(price:{{stock.price|currency}}|quantity:{{stock.quantity}})</small>
      </div>
      <div class="card-body">
        <input type="number" placeholder="quantity" class="form-control" v-model.number="quantity" />
        <hr />
        <button
          class="btn btn-success"
          @click="sell"
          :disabled="quantity<=0||!Number.isInteger(quantity)||insufficient"
        >{{insufficient?"Insufficient Quantity":"Sell"}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  props: ["stock"],
  data() {
    return {
      quantity: 0
    };
  },
  methods: {
      ...mapActions(['sellStock']),
    sell() {

      const order = {
        stockId: this.stock.id,
        price: this.stock.price,
        quantity: this.quantity
      };
      this.sellStock(order)
      this.quantity=0;
    }
  },
   computed: {
  
    insufficient() {
      return this.quantity > this.stock.quantity;
    }
  }
};
</script>


<style  scoped>
#qwerty {
  padding: 5%;
 
}
</style>