import Vue from "vue";
import { makeStore } from "./store";
import { prepareServices , prepareStorage} from './ui/plugins'

Vue.config.productionTip = false;

const store = makeStore()

prepareServices(store)
prepareStorage(store)

new Vue({
  store,
  render: h => h()
}).$mount("#app");
