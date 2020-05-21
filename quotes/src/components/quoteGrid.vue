<template>
  <div class="row">
    <appquote v-for="(quote,index) in quotes" :key="quote.id" @click.native="deleteQuote(index)">{{quote}}</appquote>
  </div>
</template>
<script>
import appquote from "./quote";
export default {
  props: ["quotes"],
  components: {
    appquote
  },
  methods:{
      deleteQuote(i){
        this.$emit('quotedeleted',i)   
        console.log(i)     
      }
  },
                updated(){
                  console.log("asan")
                }
};
</script>
<style scoped>
</style>