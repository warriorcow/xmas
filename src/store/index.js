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
    DECREMENT_STEP(state) {
      state.step--;
    },
    PUSH_ANSWERS(state, value) {
      value.forEach(item => state.answers[item]++);
    },
    REFRESH_TEST(state) {
      state.step = 0;
      for (let key in state.answers) {
        state.answers[key] = 0;
      }
    }
  },
  actions: {
    CHANGE_STATE({ commit }, value) {
      if (value == "+") {
        commit("INCREMENT_STEP");
      } else if (value == "-") {
        commit("DECREMENT_STEP");
      }
    },
    CHANGE_ANSWERS({ commit }, value) {
      commit("PUSH_ANSWERS", value);
    },
    REPASS_TEST({ commit }) {
      commit("REFRESH_TEST");
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
