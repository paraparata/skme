<template>
  <v-container class="fill-height bg" fluid>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="3">
        <v-card class="elevation-1">
          <v-toolbar color="black darken-2" dark flat>
            <v-spacer />
            <v-toolbar-title
              class="headline font-weight-black orange--text text--lighten-1"
            >Nice to Meet You (•‾⌣‾•)و</v-toolbar-title>
            <v-spacer />
          </v-toolbar>
          <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
            <v-tab v-for="item in items" :key="item">{{ item }}</v-tab>
          </v-tabs>

          <v-tabs-items v-model="tab">
            <v-tab-item v-for="item in items" :key="item">
              <v-card flat v-if="item == 'Event Organizer'">
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Nama EO"
                      name="login"
                      prepend-icon="mdi-account"
                      type="text"
                      color="orange darken-2"
                    />
                    <v-text-field
                      id="email"
                      label="Email"
                      name="email"
                      prepend-icon="mdi-email"
                      type="text"
                      color="orange darken-2"
                    />
                    <v-text-field
                      label="Username"
                      name="login"
                      prepend-icon="mdi-at"
                      type="text"
                      color="orange darken-2"
                    />
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
                  <v-text class="pl-5 pr-10 overline text-capitalize grey--text text--darken-2">Dengan mengklik Daftar, Anda menyetujui 
                  <a href="#">Syarat dan Ketentuan</a>
                  kami.</v-text>
                  <v-spacer />
                  <v-btn depressed color="orange lighten-1 white--text text-capitalize">Sign Up</v-btn>
                </v-card-actions>
              </v-card>
              <v-card flat v-if="item == 'Creativer'">
                <v-card-text>
                  <v-form>
                    <v-text-field
                      label="Nama Talent"
                      name="name"
                      prepend-icon="mdi-account"
                      type="text"
                      color="orange darken-2"
                    />
                    <v-text-field
                      id="email"
                      label="Email"
                      name="email"
                      prepend-icon="mdi-email"
                      type="text"
                      color="orange darken-2"
                    />
                    <v-text-field
                      label="Username"
                      name="username"
                      prepend-icon="mdi-at"
                      type="text"
                      color="orange darken-2"
                    />
                    <v-text-field
                      id="password"
                      label="Password"
                      name="password"
                      prepend-icon="mdi-lock"
                      type="password"
                      color="orange darken-2"
                    />
                    <v-select
                      prepend-icon="mdi-tag-heart"
                      :items="jenisBidang"
                      label="Jenis Bidang"
                      item-value="text"
                    ></v-select>
                  </v-form>
                </v-card-text>
                <v-card-actions class="pb-6 px-4">
                  <v-text class="pl-5 pr-10 overline text-capitalize grey--text text--darken-2">Dengan mengklik Daftar, Anda menyetujui 
                  <a href="#">Syarat dan Ketentuan</a>
                  kami.</v-text>
                  <v-spacer />
                  <v-btn depressed color="orange lighten-1 white--text text-capitalize">Sign Up</v-btn>
                </v-card-actions>
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tab: null,
      items: ["Event Organizer", "Creativer"],
      jenisBidang: [
        { text: "Influencer" },
        { text: "Singer" },
        { text: "Band/Group Music" },
        { text: "DJ" },
        { text: "Speaker" },
        { text: "MC" },
        { text: "Stand Up Comedian" },
        { text: "Writer" },
        { text: "Model" },
        { text: "Photographer" },
        { text: "Videographer" },
        { text: "Makeup Artist" },
      ]
    };
  }
};
</script>
- Influencer
- Singer
- Band/Group Music
- DJ
- Speaker
- MC
- Stand Up Comedian
- Writer
- Model
- Photographer
- Videographer
- Makeup Artist
<style scoped>
.bg {
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)),
    url(../assets/rachel-lynette-french-U7HLzMO4SIY-unsplash.jpg);
  background-size: cover;
  background-position: bottom;
}
</style>