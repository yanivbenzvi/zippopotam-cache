<template>
  <v-container class="justify-center">

    <v-card width="400" class="mx-auto mt-5">
      <v-card-title class="pb-0">
        <h3>Getting location around zip code</h3>
      </v-card-title>

      <v-card-text>
        <v-form>

          <v-select v-model="chosenCountry"
                    :items="countryList"
                    menu-props="auto"
                    label="Select"
                    hide-details
                    prepend-icon="mdi-map"></v-select>

          <v-text-field v-model="zipCode"
                        type="text"
                        label="Zip code"
                        prepend-icon="place"/>
        </v-form>

      </v-card-text>

      <v-divider></v-divider>

      <v-card-actions>

        <v-spacer></v-spacer>
        <v-btn @click.stop="send" color="info">send</v-btn>

      </v-card-actions>
    </v-card>
    <div v-if="locationAroundZipCode && locationAroundZipCode.length > 0" idth="400" class="mx-auto mt-5">
      <app-location-box :location-data="locationAroundZipCode"></app-location-box>
    </div>
  </v-container>
</template>

<script>
import AppLocationBox from '@/components/LocationBox'

export default {

  name:       'app-home-page',
  components: {AppLocationBox},
  data() {
    return {
      chosenCountry:         null,
      zipCode:               null,
      countryList:           null,
      locationAroundZipCode: null,
      menuItems:             [
        {title: 'Home Page', icon: 'home', to: 'dashboard'},
      ],
    }
  },

  created() {
    this.getAllCountryList()
  },

  methods: {
    send() {
      console.log('send data')
      // this.$dialogs.push({dialogComponent: 'app-error-warning', errorMessage: 'nana'})
    },

    getAllCountryList() {
      //TODO: http request for the country list
      this.countryList = ['israel', 'USA']
    },

    getLocationAroundZipCode() {
      //TODO: http request with zip code in the body parameters, request should retrieve location in zip code.
      this.locationAroundZipCode = [
        {
          'place name':         'Boqueron',
          'longitude':          '-67.1873',
          'state':              'Puerto Rico',
          'state abbreviation': '72',
          'latitude':           '17.9985',
        },
        {
          'place name':         'Boqueron',
          'longitude':          '-67.1873',
          'state':              'Puerto Rico',
          'state abbreviation': '72',
          'latitude':           '17.9985',
        },
        {
          'place name':         'Boqueron',
          'longitude':          '-67.1873',
          'state':              'Puerto Rico',
          'state abbreviation': '72',
          'latitude':           '17.9985',
        },
        {
          'place name':         'Boqueron',
          'longitude':          '-67.1873',
          'state':              'Puerto Rico',
          'state abbreviation': '72',
          'latitude':           '17.9985',
        },
        {
          'place name':         'Boqueron',
          'longitude':          '-67.1873',
          'state':              'Puerto Rico',
          'state abbreviation': '72',
          'latitude':           '17.9985',
        },
        {
          'place name':         'Boqueron',
          'longitude':          '-67.1873',
          'state':              'Puerto Rico',
          'state abbreviation': '72',
          'latitude':           '17.9985',
        },
      ]
    },


  },

  watch: {
    zipCode(value) {
      this.getLocationAroundZipCode()
      console.log('chosenCountry value has been changed to :', value)
    },
  },
}
</script>
