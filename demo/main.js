// import './style.css'
// document.getElementById("app").innerHTML = 'hello webpack';


import Vue from 'vue'
import App from './app.vue'

new Vue({
    el:"#app",
    render:h => h(App)
});