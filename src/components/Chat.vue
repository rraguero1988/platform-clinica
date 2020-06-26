<template>
     <v-content>

   <v-card width="300px" class="mx-auto">
         <v-toolbar  color="primary">
      <v-toolbar-title class="usuario">
         {{user}}
          <p v-if="typings">{{userTyping}} esta escribiendo</p>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon small>
          <v-icon class="mar" color="info">minimize</v-icon>
      </v-btn>
       <v-btn icon @click="$emit('cerrarChat')" small>
          <v-icon color="info">clear</v-icon>
      </v-btn>
     
     </v-toolbar>
      <div class="text" id="container">
         <div v-for="(mensaje,index) in mensajes" :key="index">
           <v-row v-if="validarMensaje(mensaje)">
          
           <v-col cols="8" class="mar">
               <div class="mensajeE text-center">
                <strong>{{mensaje.usuarioE}}:</strong>
                {{mensaje.mensaje}}
               </div>
          
           </v-col>
           <v-col cols="4"></v-col>
           </v-row>
            <v-row v-if="usuario === mensaje.usuarioE">
                <v-col cols="4"></v-col>
           <v-col cols="8" class="mar">
               <div class="mensajeR text-center">
                {{mensaje.mensaje}}
               </div>
          
           </v-col>
           </v-row>
       </div>
    </div>
    
     
     <v-toolbar id="barra" flat>
       
       <v-text-field placeholder="Escriba su mensaje" v-model="mensaje"></v-text-field>
       <v-btn color="info" small @click="enviar()" text>
          <v-icon>send</v-icon>
       </v-btn>
       
     </v-toolbar >
     </v-card>  

    </v-content>
</template>


<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{
     mensaje:'',
     mensajeUser:''
        }
    },

    computed:{
        ...mapState('Chat',['usuarios','mensajes','scroll','usuario']),
        
        
    },
    props:[
      'user'
    ],
    methods:{
        ...mapActions('Chat',['enviarMensaje']),
       enviar(){
     if(this.mensaje){
         const data = {
             mensaje:this.mensaje,
             usuario:this.user
         }
     this.enviarMensaje(data)
       this.mensaje=''
      this.scrollFinal()
     }else{
       alert('Debe escribir un mensaje')
     }
   },
        scrollFinal(){
           const container = document.getElementById('container')
           container.scrollTop = container.scrollHeight
        },
        validarMensaje(mensaje){
          /*if(mensaje.usuarioE != this.usuario && mensaje.usuarioD === this.user){
            console.log('si')
            return true
          }else{
            console.log('no')
            return false
          }*/
          return true
        }
    },
    mounted(){
        this.scrollFinal()
    }
}
</script>





<style scope>
span{
  font-style: italic;
  color: darkorchid;
}
.text{
  background-color:darkgrey;
  overflow-y: scroll;
  overflow-x: hidden;
  padding: 5px;
  height: 200px; 
  color:black
}
.usuario{
  color:white;
  font-size: 22px;
  font-weight: bold;
}
.usuario p{
  font-size: 16px;
  color:darkgrey;
  font-style: italic;
}
.action{
  background-color: #4CAF50;
}
.mensajeE{
    background-color: #ee44aa;
    border-radius:20px ;
    color:white;
    padding: 5px;
    }
.mensajeR{
    background-color: darkturquoise;
    border-radius: 20px;
    color: white;
    padding: 5px;
   }
.mar{
    margin-top: -12px;
}
#barra{
   background-color: darkgrey;
}
</style>