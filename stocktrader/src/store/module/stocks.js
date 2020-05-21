import stocks from "../../data/data";

const state = {
  stocks: []
};

const mutations = {
  setStocks(state, stocks) {
    state.stocks = stocks;
  },
  rndStocks(state) {
    state.stocks.forEach(element => {
      element.price = 100* (1 + Math.random() - 0.5);
    });
  }
};

const actions = {
  buyStock({ commit }, order) {
    commit("buyStock", order);
  },
  initStock({ commit }) {
    commit("setStocks", stocks);
  },
  rndStocks({ commit }) {
    commit("rndStocks");
  }
};

const getters = {
  stocksgetter: state => {
    return state.stocks;
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
