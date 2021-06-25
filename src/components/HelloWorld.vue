<template>
<h2>reactive</h2>
<h3>{{count}}</h3>
<button @click="setCount">+1</button>
<p>========================================</p>
<h2>ref</h2>
<h3>{{refCount}}</h3>
<button @click="refSetCount">+2</button>

</template>


<script >

import { toRefs } from 'vue';
import counter from '../counter'

export default {
  setup(){
    const count = counter();
    const {state, refCount, refSetCount, refObject } = count

    console.log(refCount)
    console.log(state)
    console.log(refObject)
    
    return { ...toRefs(state), refCount, refSetCount }
  }
}

</script>

