import axios from 'axios'
import VueAxios from 'vue-axios'
import io from 'socket.io-client'

export default {
namespaced:true,
state:{
  socket:'',
  usuarios:[],
  mensajes:[],
  usuario:localStorage.getItem('username') || '',
  scroll:false
},
mutations:{
  llenarUsername(state,username){
    state.usuario = username
 },
 llenarUsers(state,users){
     state.usuarios = users
 },
 llenarMensajes(state,mensajes){
    state.mensajes = mensajes
 },
 agregarMensaje(state,mensaje){
   state.mensajes.push(mensaje)
 },
 /*modificarTyping(state,typing){
     state.typing = typing
 },
 modificarUserTyping(state,user){
     state.userTyping = user
 }*/
},
actions:{
   joinServe({state,commit}){
     const usuario = localStorage.getItem('username')
     commit('llenarUsername',usuario)
     state.socket = io.connect('http://localhost:3000',{'forceNew': true})
     state.socket.emit('newUser', usuario)
   },
   listen({state,commit}){
    state.socket.on('userOnline', data => {
        commit('llenarUsers',data.usuarios)
        //commit('llenarMensajes',data.mensajes)
        console.log(state.usuarios)

    })
   
     state.socket.on('msg', msg => {
      commit('agregarMensaje',msg)
    })

    state.socket.on('buscarMensaje', msgs => {
      commit('llenarMensajes',msgs)
    })

    state.socket.on('salio', usuario => {
      
      const index = state.usuarios.indexOf(usuario)
      if(index >= 0){
      state.usuarios.splice(index,1)
          }
    })

    state.socket.on('typing', username => {
      console.log(username)
      commit('modificarUserTyping',username)
      commit('modificarTyping',true)
    })
    state.socket.on('stopTyping',()=>{
      state.userTyping = 'username'
      commit('modificarTyping',false)
    })
   },
   enviarMensaje({state},data){
    if(data.mensaje){
    state.socket.emit('msg',data)
    }
  },
   desconectar({state}){
   state.socket.disconnect();
  },
  async buscarMensaje({state},usuario){
      if(usuario){
        state.socket.emit('buscarMensaje',usuario)
      }
    

    /*try {
      const mensajes = await axios.post('/mensajesUser',data)
      console.log(mensajes.data)
     } catch (error) {
       console.log(error)
     }*/
    
  }
   
}
}