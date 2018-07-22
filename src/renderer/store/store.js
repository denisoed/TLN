import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        actionList: [],
        sprintList: [],
    },
    getters: {
        getActionList: state => state.actionList,
        getSprintList: state => state.sprintList,
    },
    actions: {
        updateActionList(context, actionList) {
            context.commit('mutationActionList', actionList);
        },
        updateSprintList(context, sprintList) {
            context.commit('mutationSprintList', sprintList);
        },
    },
    mutations: {
        mutationActionList(state, payload) {
            this.state.actionList.push(payload);
        },
        mutationSprintList(state, payload) {
            this.state.sprintList.push(payload);
        },
    },
});
