import Vue from 'vue'

const inDevelopment = process.env.NODE_ENV ==='development'
Vue.config.silent = !inDevelopment
Vue.config.devtool = inDevelopment
Vue.config.productionTip = !inDevelopment