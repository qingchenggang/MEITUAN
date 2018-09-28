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


Vue.config.productionTip = false
Vue.use(MuseUI);
Vue.use(Vant);
Vue.use(Mint);
Vue.use(Vuex);
Vue.use(animate)
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
