<template>
  <div>
    <v-row>

      <v-card v-for="(location, index) in locationData"
              :key="index"
              max-width="350px"
              min-height="150px"
              class="mx-2 my-2 text-center pa-4">
        place name: {{ location['placeName'] }}<br/>
        longitude: {{ location['longitude'] }}<br/>
        latitude: {{ location['latitude'] }}<br/>
      </v-card>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'app-location-box',

  props: {
    locationData: {type: Array, default: null},
  },
}
</script>

<style scoped>

</style>