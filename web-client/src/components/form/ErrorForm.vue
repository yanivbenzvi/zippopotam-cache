<template>
  <v-form-card :callbackAction="callbackAction"
               error
               @input="$emit('input')"
               title="Error">
    <div class="mx-3">The following error has been detected:
    <br/>({{errorMessage}})
    </div>
  </v-form-card>
</template>

<script>
  import VFormCard from './VFormCard'

  export default {
    name: "app-error-warning",

    components: {
      'v-form-card': VFormCard
    },

    props: {
      callbackAction: {},
      errorMessage: {
        type: String,
        default: 'Information about the error has not supplied'
      }
    },
  }
</script>
