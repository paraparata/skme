<template>
  <v-footer padless fixed color="grey darken-4" class="footer">
    <v-row class="px-10" cols="12">
      <div>
        <span
          class="caption text-capitalize"
					style="color: white"
          v-for="subfooter in subfooters"
          :key="subfooter.item"
        >
					<router-link :to="subfooter.link">
						{{ subfooter.item }}
					</router-link>
				</span>
      </div>
    </v-row>
  </v-footer>
</template>

<script>
var year = new Date().getFullYear();
export default {
  data: () => ({
		subfooters: [
			{ item: year + ' — Seekme', link: '/'},
			{ item: 'Blog', link: '/blog'},
			{ item: 'About Us', link: '/about'},
		]
  })
};
</script>

<style>
.footer {
  /* font-size: 4pt; */
  font-family: "Courier New", Courier, monospace;
  height: 30px;
}
a {
	color:  white !important;
  text-decoration: none;
}
</style>