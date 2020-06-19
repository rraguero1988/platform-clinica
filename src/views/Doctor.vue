<template>
<div>
      <h1>Doctores</h1>
     <v-btn @click="salir()">Salir</v-btn>
</div>
  
</template>

<script>
import router from '../router'

export default {
    
   
    methods:{
        salir(){
        localStorage.removeItem('rol')
        router.push({name:'Home'})
        }
    }
}
</script>