<template>
  <div class="fondo">
    <NavBarRol :imagen="imagen">
      <template v-slot:titulo>Doctores</template>
      <template v-slot:botones>
        <v-btn icon>
          <v-icon>home</v-icon>
        </v-btn>
        <v-btn class="ml-2" min-width="0" text>
          <v-badge color="red" overlap>
            <template v-slot:badge>
              <span>5</span>
            </template>

            <v-icon>notification_important</v-icon>
          </v-badge>
        </v-btn>

        <v-btn icon>
          <v-icon>person</v-icon>
        </v-btn>
      </template>
    </NavBarRol>
    <v-container style="height:150px"></v-container>
    <v-row>
      <v-col cols="8">
        <div style="margin-left:10px">
          <Map />
        </div>
      </v-col>
      <v-col cols="4"></v-col>
    </v-row>
    <NavigationDrawer />
  </div>
</template>

<script>
import NavBarRol from "../components/Layout/NavBarRol";
import NavigationDrawer from "../components/Layout/NaviagationDrawer";
import NavBarImage from "../assets/Doctores.jpg";
import Map from "../components/Map";
export default {
  data() {
    return {
      imagen: NavBarImage,
    };
  },

  components: {
    NavBarRol,
    NavigationDrawer,
    Map,
  },

  mounted() {
    console.log("aaa");
    this.$store.commit("setDrawer", false);
  },
};
</script>


<style scoped>
.fondo {
  background-color: grey;
  height: 900px;
}
</style>