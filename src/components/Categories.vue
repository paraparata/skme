<template>
  <v-sheet
    class="mx-auto"
    max-width="99%"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      multiple
      center-active
      prev-icon="mdi-minus orange lighten-1"
      next-icon="mdi-plus  orange lighten-1"
    >
      <v-slide-item
        v-for="n in 15"
        :key="n"
        v-slot:default="{ active, toggle }"
      >
        <v-card
          :color="active ? 'orange darken-2' : 'grey lighten-1'"
          class="ma-4"
          height="100"
          width="300"
          @click="toggle"
        >
          <v-row
            class="fill-height"
            align="center"
            justify="center"
          >
            <v-scale-transition>
              <v-icon
                v-if="active"
                color="white"
                size="48"
                v-text="'mdi-close-circle-outline'"
              ></v-icon>
            </v-scale-transition>
          </v-row>
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </v-sheet>
</template>

<script>
  export default {
    data: () => ({
      model: null,
    }),
  }
</script>