import Vue from 'vue'
import App from './App.vue'
import router from "./routes/Router.js"

Vue.config.productionTip = false

Vue.use(router);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
