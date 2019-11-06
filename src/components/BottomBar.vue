<template>
  <v-bottom-navigation
    v-model="bottomNav"
    fixed app
  >
      <v-btn to="/">
        <span>AddItems</span>
        <v-icon>mdi-plus-circle</v-icon>
      </v-btn>

      <v-btn to="/checkout">
        <span>Cart</span>
        <v-icon>mdi-cart</v-icon>
      </v-btn>

      <v-btn to="/statistic">
        <span>Statistic</span>
        <v-icon>mdi-chart-timeline-variant</v-icon>
      </v-btn>

      <v-btn to="/account">
        <span>Account</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
  </v-bottom-navigation>
</template>

// <script>
//   export default {
//     data () {
//       return {
//         bottomNav: 'recent',
//       }
//     },
//   }
// </script>