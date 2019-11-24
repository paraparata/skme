<template>
  <v-app>
    <Appbar />
    <router-view />
    <Footer />
  </v-app>
</template>

<script>
import Appbar from "./components/Appbar";
import Footer from "./components/Footer";

export default {
  name: "App",

  components: {
    Appbar,
    Footer
  },

  data: () => ({
    //
  })
};
</script>