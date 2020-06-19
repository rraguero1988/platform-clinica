import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    meta:{
      isAuth:true
    },
  },
 
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "registro" */ '../views/Inicio.vue'),
    meta:{
      isAuth:true
    },
    children:[
     {
      path:'/login',
      name: 'Login',
      component: () => import(/* webpackChunkName: "registro" */ '../components/Login.vue')
     },
     {
      path: '/registro',
      name: 'Registro',
      component: () => import(/* webpackChunkName: "registro" */ '../components/Registro.vue')
    },
    ]
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import(/* webpackChunkName: "admin" */ '../views/Admin.vue'),
    meta:{
      isAdmin:true
    }
  },
  {
    path: '/doctor',
    name: 'Doctor',
    component: () => import(/* webpackChunkName: "doctor" */ '../views/Doctor.vue'),
    meta:{
      isDoctor:true
    }
  },
  {
    path: '/cliente',
    name: 'Cliente',
    component: () => import(/* webpackChunkName: "doctor" */ '../views/Cliente.vue'),
    meta:{
      isCliente:true
    }
  },
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next)=>{
 
  const rol = localStorage.getItem('rol')
  if(to.matched.some(record => record.meta.isAdmin)){
     if(rol === 'administrador'){
       next()
     }else{
       next({name:'Registro'})
     }
  }else if(to.matched.some(record => record.meta.isDoctor)){
    if(rol === 'doctor'){
      next()
    }else{
      next({name:'Registro'})
    }
   
  }else if(to.matched.some(record => record.meta.isCliente)){
    if(rol === 'cliente'){
      next()
    }else{
      next({name:'Registro'})
    }
   
  }else if(to.matched.some(record => record.meta.isAuth)){
       if(localStorage.getItem('rol')){
       switch(rol){
         case 'administrador':
           next({name:'Admin'})
           break;
         case 'doctor':
           next({name:'Doctor'})
           break;
         case 'cliente':
           next({name:'Cliente'})
           break;
         default:
           localStorage.removeItem('rol')
           next({name:'Home'})
     }
         
       }else{
         localStorage.removeItem('rol')
         next()
       }
      
    
  }
})

export default router
