<template>

  <Ubike />
</template>

<script >
import { onMounted } from '@vue/runtime-core'
  
  import Ubike from './components/Ubike.vue'
  export default {
   components:{  
     Ubike
   },
   setup(){
     
   } 
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
