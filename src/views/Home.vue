<template>
<div class="scroll">
 <NavBar/>
  
    <div class="servicios text-center">
      <h1 class="pt-2">Nuestros Servicios</h1>
    </div>
</div>

</template>

<script>
// @ is an alias to /src
import NavBar from '../components/NavBar'

export default {
  name: 'Home',
  components: {
 NavBar
  },
  data(){
    return{

    }
  },
  watch:{
scroll(value){
console.log(value)
}
  },
  methods:{
    movio(){
     /*let post = evt.target;
     console.log(post.scrollTop)*/
     console.log('movio')
    },
    onScroll(){
      const offset = window.pageYOffset
      console.log(offset)
    }
  }
}
</script>

<style scoped>
 .servicios{
      height: 800px;
      background-color: greenyellow;
      background-repeat: no-repeat;
      background-size: cover;
      height: 625;
    }
  
</style>