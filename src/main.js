import App from "./App.vue";

/* eslint no-undef:0 */
App.name = COMPONENT_NAME;
App.version = VERSION;
const install = App.install = (Vue) => Vue.component(App.name, App);

/* 自动注册 */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default App;