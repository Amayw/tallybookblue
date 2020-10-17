import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import {consumptionModel} from '@/models/consumptionModel';
import {labelModel} from '@/models/LabelModel';

Vue.config.productionTip = false

Vue.component('Layout',Layout);
Vue.component('Icon',Icon);

window.consumptionList=consumptionModel.fetch();
window.addConsumption=(consumption: ConsumptionItem)=>{
  return consumptionModel.add(consumption);
}

window.tagsList=labelModel.fetch();
window.addLabel=(label)=>{
  const newLabel= labelModel.clone(label);
  return labelModel.add(newLabel);
}
window.findLabel=(id)=>{
  return labelModel.find(id);
}
window.updateLabel=(id,name,icon)=>{
  return labelModel.update(id,name,icon);
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
