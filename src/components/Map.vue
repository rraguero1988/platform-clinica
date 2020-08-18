<template>
    <v-main>
     <v-row>
         <v-col>
             <div>
             Mis Cordenadas Son: 
              {{myCoordinates.lat}}-{{myCoordinates.lng}}
             </div>
              <div>
             Coordenadas del mapa: 
              {{mapCoordinates.lat}}-{{mapCoordinates.lng}}
             </div>
         
         </v-col>
         <v-col>
             <GmapMap
              :center="{myCoordinates}"
              :zoo="7"
              style="width: 640px; height:360px"
              ref="mapRef"
             ></GmapMap>
         </v-col>
     </v-row>
    </v-main>
</template>


<script>
export default {
    data(){
        return {
            map:null,
            myCoordinates:{
                lat:0,
                lng:0
            },
           
        }
    },
    computed:{
       mapCoordinates(){
          if(!this.map){
              return {
                  lat:0,
                  lng:0
              }

              }else{
                  return {
                      lat:this.map.getCenter().lat(),
                      lng:this.map.getCenter().lng()
                  }
          }
       }
    },

    created(){
        this.$getLocation({})
            .then(coordinates => {
                this.myCoordinates = coordinates
            })
            .catch(err => alert(err))
    },
    mounted(){
        this.$refs.mapRef.$mapPromise.then(map => this.map = map)
        console.log(this.map)
    }
}
</script>