<template>
<v-main class="fondo">  
     <v-app-bar 
  v-scroll="onScroll"
  fixed 
  flat
  :color="!isScroll ? 'transparent' : '#ee44aa'"
  :elevation="elevation"
  >
    <v-row>
        <v-col class="mx-6 ">
          <router-link to="/">
          <h1 id="titulo">Plataforma KFE</h1>
         </router-link>
        </v-col>
     <v-spacer></v-spacer>
       <v-col>
       <router-link :to="{name:'Login'}">
         <v-btn text :color="isScroll ? 'white' : 'primary'">Ingresar</v-btn>
       </router-link>
        <router-link :to="{name:'Registro'}">
          <v-btn text :color="isScroll ? 'white' : 'primary'">Registro</v-btn>
       </router-link>
         </v-col>
    </v-row>
  </v-app-bar>
</v-main>
</template>

<script>
export default {
    data(){
        return{
            isScroll:false,
            elevation:0
        }
    },
   methods:{
        onScroll(){
        const offset = window.pageYOffset
         let titulo = document.getElementsByTagName('h1')
         if(offset > 70 ){
            titulo[0].classList.add('titulo')
             this.isScroll = true
             this.elevation = 5
            }else{
                titulo[0].classList.remove('titulo')
                 this.isScroll = false
                 this.elevation = 0
            }
              //console.log(window.innerHeight)
       
        }
   }
}
</script>


<style scoped>
.titulo{
    color: white;
}
.fondo{
  height: 628px;
  background-image: url('../assets/fondo.jpg');
  background-repeat: no-repeat;
  background-size: cover;
}
</style>