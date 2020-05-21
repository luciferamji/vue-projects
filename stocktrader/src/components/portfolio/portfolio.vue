<template >

<div  v-if="stocks.length!=0" class="card-deck" >
   
   <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>   
  </div>
  <div  v-else>
   <h1>SORRY!! NO STOCK OWNED</h1> 
  </div>
</template>
  



<script>
import { mapGetters } from "vuex";
import stock from "./stock";
export default {
  computed: {
    ...mapGetters({ stocks: "stockPortfolio" })
  },
  components:{
      appStock:stock
  }
};
</script>