import { reactive } from 'vue';

export default ()=>{
  const defaultNumber = 0;

  const state = reactive({
    count: defaultNumber,
    setCount: () => {
      state.count += 1000;
    }
  })

  //use ref

  // const refCount = ref( defaultNumber);
  // const refSetCount = () => {
  //   refCount.value += 2
  // } ;

  // const refObject = ref({
  //   foo : 0
  // })


  return state ;
}