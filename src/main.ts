import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import {consumptionModel} from '@/models/consumptionModel';

Vue.config.productionTip = false

Vue.component('Layout',Layout);
Vue.component('Icon',Icon);

window.consumptionList=consumptionModel.fetch();
window.addConsumption=(consumption: ConsumptionItem)=>{
  return consumptionModel.add(consumption);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
