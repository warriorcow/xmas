import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    step: 0,
    answers: {
      dreamer: 0, //Мечтатель
      wizard: 0, //Волшебник
      inventor: 0, //Изобретатель
      traveler: 0, //Путешественник
      researcher: 0, //Исследователь
      mastermind: 0 //Вдохновитель
    }
  },
  mutations: {
    INCREMENT_STEP(state) {
      state.step++;
    },

    PUSH_ANSWERS(state, value) {
      value.forEach(item => state.answers[item]++);
    }
  },
  actions: {
    CHANGE_STATE({ commit }) {
      commit("INCREMENT_STEP");
    },
    CHANGE_ANSWERS({ commit }, value) {
      commit("PUSH_ANSWERS", value);
    }
  },
  getters: {
    STEP_STATE(state) {
      return state.step;
    },
    ANSWERS_STATE(state) {
      return state.answers;
    }
  }
});
