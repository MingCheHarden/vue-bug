import Vue from 'vue';
import vconsole from 'vconsole';
import App from './App.vue';

Vue.config.productionTip = false;
Vue.config.errorHandler = function (err, vm, info) {
  alert(err);
};
new vconsole();
console.log(Vue.version);
new Vue({
  render: h => h(App)
}).$mount('#root');
