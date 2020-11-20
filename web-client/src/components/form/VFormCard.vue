<template>
  <v-card>
    <slot v-if="title" name="header">
      <v-card-title :class="`${titleColor} white--text title text-uppercase`">
        {{title}}
        <v-spacer></v-spacer>
        <v-icon dark @click.stop="close()">close</v-icon>
      </v-card-title>
    </slot>
    <v-card-text class="py-3 px-3">
      <slot></slot>
    </v-card-text>
    <slot name="footer">
      <v-divider></v-divider>
      <v-card-actions class="grey lighten-4">
        <v-btn @click="close"
               v-if="!error"
               color="error"
               v-text="cancel">
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn @click="saved"
               color="primary"
               v-text="save"
               depressed>
        </v-btn>
      </v-card-actions>
    </slot>
  </v-card>
</template>

<script>
  export default {
    name: 'v-form-card',

    props: {
      title: {type: String, default: ''},
      prompt: {type: Boolean, default: false},
      error: {type: Boolean, default: false}
    },

    methods: {
      close() {
        this.$emit('input')
      },
      saved() {
        if (this.prompt) {
          this.callbackAction()
        }
        if (this.error) {
          this.$dialogs.pop()
        }

      },
    },

    computed: {
      titleColor() {
        if (this.prompt) {
          return 'warning'
        }
        if (this.error) {
          return 'error'
        }
        return 'black'
      },

      save() {
        if (this.prompt) {
          return 'Yes'
        }
        if (this.error) {
          return 'Close'
        }
        return 'Save'
      },

      cancel() {
        return this.prompt ? 'No' : 'Cancel'
      },
    },
  }
</script>
