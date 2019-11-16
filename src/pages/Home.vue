<template>
  <v-container fluid class="px-0 py-0">
    <v-row class="mt-8 py-12 bg align-center">
      <v-col align="center">
        <!-- <h1 class="display-4 font-weight-black text-center white--text">seekme</h1> -->
        <router-link to="/">
        <v-img
              alt="seekme"
              class="align-center"
              contain
              min-width="82"
              src="../assets/seekme-logo.png"
              width="250"
              height="250"
            />
          </router-link>
        
        <h2 class="title text-center white--text">Tempat Talent Bertemu Event Organizer</h2>
      </v-col>
    </v-row>
    <v-row>
      <Categories />
    </v-row>
    <v-row justify="center">
      <v-text class="display-2 font-weight-medium">(VwV) Creative Talents</v-text>
    </v-row>
    <v-row no-gutters class="py-9 text-center justify-center">
      <v-col v-for="n in cards" :key="n" cols="11" class="mx-5 mb-5" lg="2" md="3" sm="5">
        <v-card>
          <v-img
            :src="n.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="n.title"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-btn text class="ma-1" color="orange darken-2">
              <v-icon left>mdi-bookmark</v-icon>Book
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn icon color="red lighten-1">
              <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon color="green lighten-1">
              <v-icon>mdi-share-variant</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Categories from "../components/Categories"

export default {
  components: {
    Categories
  },
  data: () => ({
    cards: [
      {
        title: "Pre-fab homes",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 12
      },
      {
        title: "Favorite road trips",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Best airlines",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      }
    ]
  })
};
</script>

<style scoped>
.klik {
  color: orange;
}
.bg {
  height: 400px;
  /* background-image: ; */
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://images.unsplash.com/photo-1559865662-7e42f2e2fc81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1360&q=80);
  background-size: cover;
  background-position-y: center;
}
</style>