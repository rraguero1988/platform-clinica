<template>
<v-content>
      <v-row>
           <v-col>
           <div v-if="divChat">
           <chat :user="userChat" @cerrarChat="divChat = false"></chat>
              </div>
     </v-col>
    <v-col>
         <v-card width="250px">
      <v-toolbar color="primary">
          <v-toolbar-title class="usuario">{{tituloUsuarios}}</v-toolbar-title>
      <v-spacer></v-spacer>
     </v-toolbar>
     <div class="contenedor">
     <v-row class="item-contenedor" v-for="(user,index) in usuarios" :key="index" @click="mostrarChat(user)" v-if="user != usuario" >
       <v-btn fab small >
        <v-avatar></v-avatar>
       </v-btn>
       <p class="user">{{user}}</p>
     </v-row>
      </div>
    </v-card>
    </v-col>
    
  </v-row>
   </v-content>
</template>

<script>
import {mapState,mapActions} from 'vuex'
import Chat from './Chat'
export default {
    data(){
        return{
          divChat:false,
          userChat:''
        }
    },
    computed:{
      ...mapState('Chat',['usuarios','mensajes','usuario']),

      tituloUsuarios(){
          console.log(this.usuarios.lenght)
          if((this.usuarios.length) > 1){
              return 'Usuarios Online'
          }else{
              return 'No hay usuarios Conectados'
          }
      }
 },
    mounted(){
     /*this.joinServe()
      this.listen()*/
    },
    methods:{
        ...mapActions('Chat',['joinServe','listen','buscarMensaje']),
            mostrarChat(usuario){
            this.divChat = true
            this.userChat = usuario
            this.buscarMensaje(usuario)
        }
    },
    components:{
        Chat
    }
    

}
</script>

<style scoped>
.item-contenedor{
   margin: 5px;
   cursor: pointer;
}
.contenedor{
    max-height: 300px;
    overflow-y: scroll;
}
.user{
    margin-left: 15px;
    margin-top: 5px;
    font-size: 18px;
}
</style>