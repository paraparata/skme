<template>
  <v-container fluid>
    <v-app-bar app color="grey darken-4" dark class="px-10" fixed>
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-col>
        <v-toolbar-title>
          <router-link to="/">
            <h1 class="display-1 font-weight-black orange--text text--lighten-2">seekme</h1>
          </router-link>
        </v-toolbar-title>
      </v-col>
      <v-col>
        <v-card outlined light>
          <!-- <div class="batas"> -->
          <v-text-field
            hide-details
            prepend-inner-icon="mdi-magnify"
            single-line
            color="orange"
            rounded
            light
            clearable
            placeholder="Search"
            class="mt-1 caption"
          ></v-text-field>
        </v-card>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn text tile-click color="orange lighten-2" to="/login">
          <!-- <v-icon color="orange darken-2">mdi-heart</v-icon> -->
          Login
        </v-btn>
        <v-btn text tile color="orange lighten-2" to="/signup">
          <!-- <v-icon color="orange darken-2">mdi-heart</v-icon> -->
          Sign Up
        </v-btn>
      </v-col>
    </v-app-bar>
  </v-container>
</template>


<style scoped>
.batas {
  border: 2px solid yellow;
}
a {
  text-decoration: none;
}
</style>