import "./assets/css/main.scss";

import router from "./router/index";

import { createPinia } from "pinia";

import { createApp, h } from "vue";

// =============COMPONENTS SUPPORT=============
import BootstrapVueNext from "bootstrap-vue-next";
import FormValidator from "@/components/shared/FormValidator.vue";
import VueDatePicker from "@vuepic/vue-datepicker";

import VueApexCharts from "vue3-apexcharts";
import ElementPlus from "element-plus";

import vSelect from "vue-select";

import App from "./App.vue";

const pinia = createPinia();

const app = createApp({
  setup() {},
  render: () => h(App),
});

app.use(pinia);
app.use(router);
app.use(BootstrapVueNext);
app.use(VueApexCharts);
app.use(ElementPlus);

app.component("FormValidator", FormValidator);
app.component("VSelect", vSelect);

VueDatePicker.props.format.default = "dd/MM/yyyy";
VueDatePicker.props.actionRow.default = {
  showCancel: false,
  showPreview: false,
  showSelect: false,
};
VueDatePicker.props.autoApply.default = true;
app.component("DatePicker", VueDatePicker);

app.mount("#app");
