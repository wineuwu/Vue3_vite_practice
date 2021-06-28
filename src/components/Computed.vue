<template>
  <div>
    <input type="text" v-model="twd">
    <input type="text" v-model="jpy">
  </div>
</template>

<script>
import { reactive, computed, toRefs } from 'vue'
export default {
 setup() {
   const product = reactive({
     twd:0.278,
     jpy: computed({
       get: ()=>{return Number.parseFloat(Number(product.twd)/0.278).toFixed(3)},
       set: (val) => {return Number.parseFloat(Number(product.twd)*0.278).toFixed(3)}
     })
   })
   
   return {...toRefs(product)}
 }
}
</script>