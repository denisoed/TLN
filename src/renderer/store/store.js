import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        sprintActive: '',
    },
    getters: {
        getSprintActive: state => state.sprintActive,
    },
    actions: {
        updateSprintActive(context, id) {
            context.commit('mutationSprintActive', id);
        },
    },
    mutations: {
        mutationSprintActive(state, payload) {
            this.state.sprintActive = payload;
        },
    },
});
