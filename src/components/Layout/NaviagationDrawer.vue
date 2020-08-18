<template>
    <v-navigation-drawer
    v-model="drawer"
    app
   
    src="@/assets/3.jpg"
    width="260"
    >
    <template v-slot:img="props">
      <v-img
        gradient="to top right, rgba(100,115,201,.6), rgba(25,32,72,.9)"
        v-bind="props"
      />
    </template>
 <v-divider class="mb-1" />
     <v-list
      dense
      nav
      class="text--center"
    >
      <v-list-item>
        <v-list-item-avatar
          class="align-self-center"
          color="white"
          contain
        >
          <v-img
            src="@/assets/doctor01.jpg"
            max-height="30"
          />
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title
          class="white--text display"
            v-text="name"
            style="font-size:18px"
            
          />
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-divider class="mb-2" />
     <v-list
      expand
      nav>

      <template v-for="(item, i) in items">
       <BaseItem 
       :key="`item-${i}`"
       :item="item"
       />
      </template>

      <v-list-item  @click="salir()">
          <v-list-item-icon>
              <v-icon class="white--text">meeting_room</v-icon>
              </v-list-item-icon>
           <v-list-item-content class="white--text"> 
        <v-list-item-title>Salir</v-list-item-title>
          </v-list-item-content>
      </v-list-item>

     </v-list>
  
    </v-navigation-drawer>

</template>

<script>
import {mapState,mapActions} from 'vuex'
import BaseItem from '../base/BaseItem'
import router from '../../router'
export default {
name: 'NavigationDrawer',

    data(){
        return{
      barColor:'red',
      barImage: '@/assets/3.jpg',
      name:'Yordanys Albelo',
      items:[
          {titulo:'Dashboard',icon:'home',to:'/probando'},
          {titulo:'Perfil',icon:'person',to:'/probando'},
          {titulo:'Pacientes',icon:'supervisor_account',to:'/probando'},
          {titulo:'Tratamientos',icon:'local_hospital',to:'/probando'},
          
      ]
        }
    
    },
  
    computed:{
        ...mapState(['']),
        drawer: {
            get () {
              return this.$store.state.drawer
            },
            set (val) {
                this.$store.commit('setDrawer',val)
            }
        },
    },
    methods:{
    ...mapActions('Chat',['desconectar']),
    salir(){
        this.desconectar()
        localStorage.removeItem('username')
        localStorage.removeItem('rol')
        router.push({name:'Home'})
        }
    },
    components:{
        BaseItem
    }
    
}
</script>