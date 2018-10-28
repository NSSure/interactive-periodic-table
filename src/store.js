import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        groupCoordinate: -1,
        periodCoordinate: -1,
        phase: 'all'
    },
    mutations: {
        setGroupCoordinate(state, groupValue) {
            state.groupCoordinate = groupValue;
        },
        setPeriodCoordinate(state, periodValue) {
            state.periodCoordinate = periodValue;
        },
        setPhase(state, phase) {
            state.phase = phase;
        }
    }
})