<template>
<div class="wrapper">
  <h1>{{count}}</h1>
  <button @click="setCount"> +4 </button>
</div>
</template>

<script >

import { toRefs } from 'vue';
import counter from '../counter'

export default {
  setup(){
    const count = counter();
    return { ...toRefs(count) }
  }
}

</script>

<style lang="scss" scoped>
.wrapper{
  
  box-shadow:.5px .8px 3px .2px #e0e0e0  ;
  width: 100%;
  max-width: 600px;
  box-sizing: border-box;
  min-width:300px;
  margin: auto;
  padding: 30px ;
  border-radius:20px ;

  h1{
    color:#696969;
    font-size: 100px;
    line-height:1;
  }
  button{
    width: 200px;
    height: 50px;
    border: .5px dashed #696969;
    border-radius:250px ;
    background:rgba(255, 255, 255, 0.6);
    color:rgb(51, 51, 51);
    font-size: 35px;
  }
}

</style>

