import Vue from 'vue';
import Vuex from 'vuex';

import champioshipModule from './modules/chapionshipModule'
import clubModule from './modules/clubModule'
import newsModule from './modules/newsModule'

Vue.use(Vuex);

export default new Vuex.Store({ 
	modules:{
		champioshipModule,
		clubModule,
		newsModule
	}
})