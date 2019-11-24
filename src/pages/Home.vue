<template>
  <v-container fluid class="px-0 py-0">
    <Bubble />
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
    <v-row class="mt-7 mb-2" justify="center" align="center">
      <code class="title mx-4 red--text text--lighten-1">(・∧‐)ゞ</code>
      <v-text class="display-2 font-weight-black">How We Work?</v-text>
    </v-row>
    <v-row no-gutters class="mb-3" justify="center">
      <v-card
        v-for="n in fungsi"
        :key="n"
        class="mx-5 my-3 shake-little"
        min-width="300"
        max-width="400"
      >
        <div></div>
        <v-card-text>
          <p class="headline text--primary text-center">{{n.role}}</p>
          <div class="text--primary text-center">{{n.desc}}</div>
        </v-card-text>
      </v-card>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <Categories />
    </v-row>
    <v-row class="mt-7" justify="center" align="center">
      <code class="title mx-4 red--text text--lighten-1">(ﾉ≧∀≦)ﾉ</code>
      <v-text class="display-2 font-weight-black">Your Creative Talents</v-text>
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
    <v-row class="mb-10" justify="center">
      <v-col cols="11">
        <div class="mx-auto pa-6 elevation-3 kartu">
          <v-row>
            <v-img
              alt="seekme"
              class="justify-center"
              contain
              min-width="82"
              src="../assets/seekme-logo.png"
              width="100"
              height="100"
            />
          </v-row>
          <v-row justify="center">
            <v-text class="subtitle font-weight-bold orange--text text--darken-3 text-center">Join Us, Now</v-text>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Categories from "../components/Categories";
import Bubble from "../components/Bubble";
// import LoginOverlay from "../components/Login";

export default {
  components: {
    Categories,
    Bubble,
  },
  data: () => ({
    cards: [
      {
        title: "Anya Terbaik",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 12
      },
      {
        title: "Anya Terbaik",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Anya Terbaik",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Anya Terbaik",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Anya Terbaik",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Anya Terbaik",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Anya Terbaik",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Anya Terbaik",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Anya Terbaik",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Anya Terbaik",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Anya Terbaik",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Anya Terbaik",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      },
      {
        title: "Anya Terbaik",
        src:
          "https://img.okeinfo.net/content/2019/09/26/33/2109793/5-pose-seksi-anya-geraldine-dari-pantai-hingga-kolam-hot-Ik0tKUdRkG.jpg",
        flex: 6
      }
    ],
    fungsi: [
      {
        role: "Event Organizer Support",
        desc:
          "Kami memiliki segudang talent untuk mengisi event anda. Dapatkan pengalaman termudah dalam menyelenggarakan event apapun tanpa bingung mencari pengisi acara. Temukan di Seekme.id!"
      },
      {
        role: "Creative Talent Community",
        desc:
          "Berbagai Creative Talent telah bergabung bersama kami. Dengan spesialisasi kreatifitas yang beragam. Kami memfasilitasi para Creative Talent mendapatkan event untuk berkreasi. Jadilah percaya diri dan ikut bergabung dengan kami di Seekme.id!"
      }
    ]
  })
};
</script>

<style scoped>
@import url(https://csshake.surge.sh/csshake.min.css);

.klik {
  color: orange;
}
.bg {
  height: 400px;
  /* background-image: ; */
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(https://images.unsplash.com/photo-1559865662-7e42f2e2fc81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1360&q=80);
  background-attachment: fixed;
  background-size: cover;
  background-position-y: bottom;
}
.kartu {
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.7),
      rgba(255, 255, 255, 0.2)
    ),
    url(../assets/raul-angel-9FvZfRKKfH8-unsplash.jpg);
  background-size: cover;
}
.snack {
  font-family: 'Delius';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: local('Delius-Regular'), url(https://fonts.gstatic.com/s/delius/v9/PN_xRfK0pW_9e1rdZsg_.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
</style>