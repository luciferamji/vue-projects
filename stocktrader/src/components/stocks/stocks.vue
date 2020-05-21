<template>
  <div class="card-deck">
    <app-stock v-for="stock in stocks" :key="stock.id" :stock="stock"></app-stock>
  </div>
</template>
<script>
 import Stock from './stock.vue'
export default {
   components:{
      appStock:Stock
  },
  computed:{
  stocks(){
    return this.$store.getters.stocksgetter;
  }
}
};

</script>