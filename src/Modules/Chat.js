import axios from 'axios'
import VueAxios from 'vue-axios'
import io from 'socket.io-client'

export default {
namespaced:true,
state:{
  socket: io('http://localhost/4000'),
  usuarios:[],
  mensjaes:[],
  usuario:localStorage.getItem('username') || ''
},
mutations:{

},
actions:{
   joinServe({state}){
     state.socket.emit('newUser', state.usuario)
   }
}
}