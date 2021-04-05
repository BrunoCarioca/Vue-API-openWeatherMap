import Vue from 'vue'
import App from './App.vue'
import './quasar'
//Importanto o Módulo
import VueResource from 'vue-resource'
// registrando o módulo/plugin no global view object
Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
