<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Animations</h1>
            <hr>
              <buttton class="btn btn-primary" @click="show=!show">show</buttton>
              <hr>
              <transition name="fade" appear>
              <div class="alert alert-info" v-if="show" >Just a random message</div>
              </transition>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show:true
            }
        }
    }
</script>

<style scoped>
.fade-enter{
    opacity:0;
}
.fade-enter-active{
    transition:opacity 2s;

}

.fade-leave-active{transition:opacity 2s;opacity:0}



</style>
