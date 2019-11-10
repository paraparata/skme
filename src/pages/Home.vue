<template>
  <v-container fluid>
    <div class="my-10 px-10">
      <v-row no-gutters class="justify-center">
        <h1 class="display-3 font-weight-black text-center">seekme</h1>
      </v-row>
      <v-row no-gutters class="justify-center">
        <h1 class="title text-center">Tempat Talent Bertemu Event Organizer</h1>
      </v-row>
    </div>
    <v-row no-gutters class="px-10 text-center">
      <v-col v-for="n in 5" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile>{{n}} of 3 columns</v-card>
      </v-col>
    </v-row>
    <!-- <v-row no-gutters class="px-10 text-center">


    </v-row> -->
  </v-container>
</template>

<script>
export default {};
</script>

<style scoped>
.batas {
  border: 2px solid yellow;
}
</style>