<template>
  <v-main v-resize="onResize" id="container">
    <v-img :height="height" src="../assets/fondo.jpg">
      <v-row></v-row>
      <v-app-bar
        v-scroll="onScroll"
        fixed
        flat
        :color="!isScroll ? 'transparent' : '#ee44aa'"
        :elevation="elevation"
        class="hidden-sm-and-down"
      >
        <v-row>
          <v-col class="mx-6 hidden-sm-and-down">
            <router-link to="/">
              <h1 id="titulo">Plataforma KFE</h1>
            </router-link>
          </v-col>
          <v-spacer></v-spacer>
          <v-col class="hidden-sm-and-down">
            <router-link :to="{name:'Login'}">
              <v-btn text :color="isScroll ? 'white' : 'primary'">Ingresar</v-btn>
            </router-link>
            <router-link :to="{name:'Registro'}">
              <v-btn text :color="isScroll ? 'white' : 'primary'">Registro</v-btn>
            </router-link>
          </v-col>
        </v-row>
      </v-app-bar>
      <v-app-bar fixed flat color="transparent" class="hidden-md-and-up m-5">
        <v-app-bar-nav-icon class="colorButton" @click="onDrawer()"></v-app-bar-nav-icon>
      </v-app-bar>
    </v-img>
  </v-main>
</template>

<script>
export default {
  data() {
    return {
      isScroll: false,
      elevation: 0,
      height: 0,
      drawer: false
    };
  },
  watch: {},

  mounted() {
    this.height = window.innerHeight;
    const offset = window.pageYOffset;
    console.log(offset);
  },
  methods: {
    onScroll() {
      const offset = window.pageYOffset;

      let titulo = document.getElementsByTagName("h1");
      if (offset > 70) {
        titulo[0].classList.add("titulo");
        this.isScroll = true;
        this.elevation = 5;
      } else {
        titulo[0].classList.remove("titulo");
        this.isScroll = false;
        this.elevation = 0;
      }
      //console.log(window.innerHeight)
    },
    onResize() {
      this.height = window.innerHeight;
    },
    onDrawer() {
      this.$emit("drawer", true);
    }
  }
};
</script>


<style scoped>
.titulo {
  color: white;
}
.colorButton {
  margin: 5px;
  color: green;
  position: absolute;
}
</style>