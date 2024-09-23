/*import { createApp } from 'vue'
import App from './App.vue'
import router from './router';

const app = createApp(App);

app.use(router);
createApp(App).mount('#app')*/

import { createApp } from 'vue';
import App from './App.vue';
import VueLazyload from 'vue-lazyload';

const app = createApp(App);

app.use(VueLazyload, {
  loading: 'caminho/para/imagem/loading-spinner.gif', // Imagem exibida enquanto a imagem principal está carregando
  attempt: 1, // Número de tentativas para carregar a imagem
});

app.mount('#app');

