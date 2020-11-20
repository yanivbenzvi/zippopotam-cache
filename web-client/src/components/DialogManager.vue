<template>
    <div>
        <v-dialog v-for="(dialog, index) in dialogs"
                  :value="true"
                  persistent
                  :key="index"
                  @input="closeDialog"
                  max-width="620px">

            <component :is="dialog.dialogComponent"
                       @input="closeDialog"
                       :errorMessage="dialog.errorMessage">
            </component>
        </v-dialog>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "app-dialog-manager",

        props: {
            dialogComponent: {},
        },

        beforeCreate() {
            const requireComponent = require.context('../components/form', true, /\.vue$/)
            requireComponent
                .keys()
                .map(filename => requireComponent(filename).default)
                .filter(config => config && config.name)
                .forEach(config => Vue.component(config.name, config))
        },

        data() {
            return {
                dialogs: this.$dialogs,
            }
        },

        methods: {
            closeDialog() {
                this.dialogs.pop()
            }
        }
    }
</script>
