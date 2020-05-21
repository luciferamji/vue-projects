<template>
   <div>
          <h1>Let's start trade today</h1>
<hr>
<p>YOUR FUNDS:{{funds|currency}}</p>

   </div>
 
</template>

<script>
export default {
    computed:{
        funds(){
         return this.$store.getters.funds;
        }
    }
}
</script>