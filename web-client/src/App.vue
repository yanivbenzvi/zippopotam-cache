<template>
  <v-app>
    <v-app-bar app
               color="primary"
               dark>
      <v-app-bar-nav-icon><v-icon>home</v-icon></v-app-bar-nav-icon>
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
