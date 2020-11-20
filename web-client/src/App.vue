<template>
  <v-app>
    <v-app-bar app
               color="primary"
               dark>
      <div class="d-flex align-center">
        Zip Location
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
      <app-dialog-manager/>
    </v-main>
  </v-app>
</template>

<script>
import AppDialogManager from '@/components/DialogManager'

export default {
  name: 'App',

  components: {
    AppDialogManager,
  },
}
</script>
