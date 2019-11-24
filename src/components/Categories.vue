<template>
  <v-sheet class="mx-auto" max-width="99%" color="transparent">
    <v-slide-group
      v-model="model"
      class="pa-4"
      multiple
      center-active
      prev-icon="mdi-minus orange lighten-1"
      next-icon="mdi-plus  orange lighten-1"
    >
      <v-slide-item v-for="n in categories" :key="n" v-slot:default="{ active, toggle }">
        <v-card class="ma-4" height="100" width="300" @click="toggle">
          <v-img
            :src="n.img"
            :gradient="active ? 'to bottom, rgba(255,167,38,.4), rgba(255,167,38,.6)' : 'to bottom, rgba(0,0,0,.45), rgba(0,0,0,.45)'"
            class="white--text align-end"
            height="100px"
            center
          >
            <v-row justify="end" class="pr-4">
              <v-scale-transition>
                <v-icon v-if="active" color="white" size="28" v-text="'mdi-close-circle-outline'"></v-icon>
              </v-scale-transition>
            </v-row>
            <v-card-title v-text="n.title"></v-card-title>
          </v-img>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
export default {
  data: () => ({
    categories: [
      {
        title: "Influencer",
        img:
          "https://images.unsplash.com/photo-1572270184090-3c5a62939cfa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1352&q=80"
      },
      {
        title: "Singer",
        img:
          "https://images.unsplash.com/photo-1474959783111-a0f551bdad25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Band/Group Music",
        img:
          "https://images.unsplash.com/photo-1474692295473-66ba4d54e0d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1276&q=80"
      },
      {
        title: "DJ",
        img:
          "https://images.unsplash.com/photo-1557787824-93666b9f6093?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
      },
      {
        title: "Keynote Speaker",
        img:
          "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80"
      },
      {
        title: "MC",
        img:
          "https://images.unsplash.com/photo-1528605105345-5344ea20e269?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Stand Up Comedian",
        img:
          "https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Writer",
        img:
          "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1266&q=80"
      },
      {
        title: "Model",
        img:
          "https://images.unsplash.com/photo-1500643752441-4dc90cda350a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=657&q=80"
      },
      {
        title: "Photographer",
        img:
          "https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1339&q=80"
      },
      {
        title: "Videographer",
        img:
          "https://images.unsplash.com/photo-1526399502219-5989903425b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      },
      {
        title: "Makeup Artist",
        img:
          "https://images.unsplash.com/photo-1571942479943-ab37bb453c07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
      }
    ]
  })
};
</script>