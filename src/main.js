import App from "./App.vue";

/* istanbul ignore next */
const install = App.install = (Vue) => Vue.component(App.name, App);

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default App;