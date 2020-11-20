import Vue     from 'vue'
import Axios   from 'axios'

let MyPlugin = {
    install: function (Vue, options) {
        Vue.prototype.$dialogs = []
        Vue.prototype.$http    = Axios
    },
}

Vue.use(MyPlugin)