<template>
  <v-container class="fill-height bg" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="3">
        <!-- <v-row class="mb-5 text-center justify-center">
          <v-img
              alt="seekme"
              class="justify-center"
              contain
              min-width="82"
              src="../assets/seekme-lup-only.png"
              width="100"
              height="100"
            />
        </v-row> -->
        <v-card class="elevation-1">
          <v-toolbar color="black darken-2" dark flat>
            <v-spacer />
            <v-toolbar-title class="headline font-weight-black orange--text text--lighten-1">Hi? Welcome Back ( ﾟ▽ﾟ)/</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-card-text>
            <v-form>
              <v-text-field label="Username" name="login" prepend-icon="mdi-account" type="text" color="orange darken-2"/>
              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                color="orange darken-2"
              />
            </v-form>
          </v-card-text>
          <v-card-actions class="pb-6 pr-4">
            <v-spacer />
            <v-btn text class="text-capitalize grey--text text--darken-3">Forget Password?</v-btn>
            <v-btn depressed color="orange lighten-1 white--text text-capitalize">Login</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
  <!-- <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-btn :href="source" icon large target="_blank" v-on="on">
                  <v-icon>mdi-code-tags</v-icon>
                </v-btn>
              </template>
              <span>Source</span>
            </v-tooltip>
            <v-tooltip right>
              <template v-slot:activator="{ on }">
                <v-btn
                  icon
                  large
                  href="https://codepen.io/johnjleider/pen/pMvGQO"
                  target="_blank"
                  v-on="on"
                >
                  <v-icon>mdi-codepen</v-icon>
                </v-btn>
              </template>
              <span>Codepen</span>
  </v-tooltip>-->
</template>

<script>
export default {};
</script>

<style scoped>
.bg {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url(../assets/rachel-lynette-french-U7HLzMO4SIY-unsplash.jpg);
  background-size: cover;
  background-position: bottom;
}
</style>