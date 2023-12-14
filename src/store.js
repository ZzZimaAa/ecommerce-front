// store.js

import { createStore } from 'vuex';

export default createStore({
  // ... другие настройки store

  state: {
    // ... другие состояния
    searchResults: [],
  },
  mutations: {
    // Используйте здесь стрелочную функцию
    updateSearchResults: (state, results) => {
      state.searchResults = results;
    },
  },
  actions: {
    // Используйте здесь стрелочную функцию
    setSearchResults: ({ commit }, results) => {
      commit("updateSearchResults", results);
    },
  },
  getters: {
    getSearchResults: (state) => {
      return state.searchResults;
    },
  },
  modules: {
    // ... другие модули, если есть
  },
});
