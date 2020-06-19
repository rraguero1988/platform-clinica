<template>
    <v-main>
        <v-img  :height="height" src="../assets/doctor01.jpg">
         <v-container>
     <v-row v-resize="onResize" class="d-flex">
     <v-col  cols="12" sm="6" md="6">
         <router-link to="/">
         <h1>Plataforma KFE</h1>
         </router-link>
     </v-col>
     <v-spacer></v-spacer>
     <v-col class=" "  cols="12" sm="6" md="6">
        <transition name="slide-fade" mode="out-in">
       <router-view></router-view>
       </transition>
     </v-col>
    </v-row>
    </v-container></v-img>
    </v-main>
</template>

<script>
export default {
    data(){
        return{
            height:0
        }
    },

    methods:{
           onResize () {
        this.height = window.innerHeight
      },
    }
}
</script>


<style scoped>
.fade-enter, v-leave-to{
    opacity: 0;
}
.slide-fade-enter-active{
    transition: all .4s ease;
}
.slide-fade-leave-active{
    transition: all .4s cubic-bezier(.17,.67,.83,.67);
}
.slide-fade-enter, .slide-fade-leave-to{
    transform: translateY(800px);
    overflow: 0;
} 
</style>