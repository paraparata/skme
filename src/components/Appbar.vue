<template>
    <v-app-bar
      app
      color="white accent-5"
      dark
      class="pr-10 pl-10"
    >
      <!-- <v-app-bar-nav-icon></v-app-bar-nav-icon> -->

      <v-toolbar-title>
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="82"
          src="../assets/seekme-logo.png"
          width="60"
          height="60"
        />
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <!-- <v-btn icon>
        <v-icon color="orange darken-2">mdi-magnify</v-icon>
      </v-btn> -->
      <v-text-field
        hide-details
        prepend-icon="mdi-magnify"
        single-line
        color="orange"
        outlined
        rounded
        light
        placeholder="Search"
        loader-heiht
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-btn text color="orange darken-2">
        <!-- <v-icon color="orange darken-2">mdi-heart</v-icon> -->
        Login
      </v-btn>

      <v-menu
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
      </v-menu>
    </v-app-bar>
</template>

<style scoped>
.search{
  padding: 5em;
}
</style>