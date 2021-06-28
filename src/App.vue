<template>

  <Data />
  <Computed/>
</template>

<script >
import { onMounted } from '@vue/runtime-core'
  
  import Data from './components/Data.vue'
  import Computed from './components/Computed.vue'
  export default {
   components:{  
     Data,
     Computed
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
