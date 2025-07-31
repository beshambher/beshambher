import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

// Animations
AOS.init({
  anchorPlacement: 'top-left',
  duration: 1000
});
