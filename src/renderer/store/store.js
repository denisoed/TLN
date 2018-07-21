import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        actionList: [],
    },
    getters: {
        getActionList: state => state.actionList,
    },
    actions: {
        editActionList(context, actionList) {
            context.commit('mutationActionList', actionList);
        },
    },
    mutations: {
        mutationActionList(state, payload) {
            this.state.actionList.push(payload);
        },
    },
});
