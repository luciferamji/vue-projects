<template>
<div class="row">
<div class="col-sm-12">
<h1>Quotes app</h1>
<div class="progress">
  <div class="progress-bar progress-bar-striped progress-bar-animated active" role="progressbar" aria-valuemin="0" aria-valuemax="100" :style="{width:(quoteCount/maxQuotes)*100+'%'} ">{{quoteCount}}/{{maxQuotes}}</div>
</div>
</div>


</div>



</template>
<script>
export default {
    props:['quoteCount','maxQuotes']
}
</script>
