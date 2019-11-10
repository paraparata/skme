<template>
    <v-container fluid>
      <v-app-bar
      app
      color="white accent-5"
      dark
      class="px-10"
      fixed
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
      <v-col>
        <v-toolbar-title>
        <router-link to="/">
          <v-img
            alt="Vuetify Name"
            class="mt-1"
            contain
            min-width="82"
            src="../assets/seekme-logo.png"
            width="60"
            height="60"
          />
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
         <v-btn text tile-click color="orange darken-2" to="/login">
          <!-- <v-icon color="orange darken-2">mdi-heart</v-icon> -->
          Login
        </v-btn>
        <v-btn text tile color="orange darken-2" to="/signup">
          <!-- <v-icon color="orange darken-2">mdi-heart</v-icon> -->
          Sign Up
        </v-btn>
      </v-col>
    </v-app-bar>
    </v-container>
     <!-- <v-spacer></v-spacer> -->
      <!-- <v-btn icon>
        <v-icon color="orange darken-2">mdi-magnify</v-icon>
      </v-btn> -->
      
      <!-- </v-col> -->
      <!-- <v-spacer></v-spacer> -->

     

      <!-- <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon color="orange darken-2">mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu> -->
</template>

<style scoped>
.batas{
  border: 2px solid yellow;
}
</style>