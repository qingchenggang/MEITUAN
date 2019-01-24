// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Vant from 'vant';
import 'vant/lib/vant-css/index.css';
import Mint from 'mint-ui';
import animate from 'animate.css'

import Vuex from 'vuex';
import $ from 'jquery'
import store from './store';
import VueLazyLoad from 'vue-lazyload' //图片懒加载

import './style.css'
import VueDirectiveImagePreviewer from 'vue-directive-image-previewer'
import 'vue-directive-image-previewer/dist/assets/style.css'
import VConsole from 'vconsole/dist/vconsole.min.js' //import vconsole
let vConsole = new VConsole() // 初始化
Vue.config.productionTip = false
import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(MuseUI);
Vue.use(Vant);
Vue.use(Mint);
Vue.use(Vuex);
Vue.use(animate);
Vue.use(VueDirectiveImagePreviewer);
Vue.use(VueLazyLoad, {
	preLoad: 1.3,
	error: 'http://img1.imgtn.bdimg.com/it/u=1160684446,1076555601&fm=26&gp=0.jpg',
	loading: 'http://img1.imgtn.bdimg.com/it/u=1160684446,1076555601&fm=26&gp=0.jpg',
	attempt: 1
})
/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
