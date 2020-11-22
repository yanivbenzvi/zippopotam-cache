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
                    item-value="sName"
                    item-text="fName"
                    menu-props="auto"
                    label="Country name"
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
        <v-btn @click.stop="clear" color="error">clear result</v-btn>

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
      countryList:           [],
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
    async send() {
      await this.getLocationAroundZipCode()
      if (this.locationAroundZipCode?.length === 0) {
        this.$dialogs.push({
          dialogComponent: 'app-error-warning',
          errorMessage:    `Zipcode is not valid or not exist.`,
        })
      }
    },

    async getAllCountryList() {
      try {
        const response   = await this.$http.get('http://localhost:5000/v1/country')
        this.countryList = response.data.countries
      } catch (error) {
        console.error(error)
        this.$dialogs.push({
          dialogComponent: 'app-error-warning',
          errorMessage:    `cannot get country list: ${error.toString()}`,
        })
      }
    },

    async getLocationAroundZipCode() {
      try {
        const response             = await this.$http.get(`http://localhost:5000/v1/places`, {
          params: {
            countryName: this.chosenCountry,
            zipcode:     this.zipCode,
          },
        })
        this.locationAroundZipCode = response.data.places
      } catch (error) {
        let errorMessage = error.toString()

        if (error.request.status === 400) {
          errorMessage = 'Zipcode or Country Name are missing.'
        }

        this.$dialogs.push({
          dialogComponent: 'app-error-warning',
          errorMessage:    errorMessage,
        })
      }
    },

    clear() {
      this.zipCode               = ''
      this.locationAroundZipCode = null
    },

  },
}
</script>
