<template>
    <div>
        <h1>Usuarios</h1>
    </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
    data(){
        return{

        }
    },
    mounted(){
      this.joinServe()
    },
    methods:{
        ...mapActions('Chat',['joinServe'])
    }
    

}
</script>