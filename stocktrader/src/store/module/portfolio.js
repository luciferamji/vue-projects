const state = {
  funds: 10000,
  stocks: []
};

const mutations = {
  buyStock(state, { stockId, price, quantity }) {
    const record = state.stocks.find(element => element.id == stockId);
    if (record) {
      record.quantity += quantity;
    } else {
      state.stocks.push({
        id: stockId,
        quantity
      });
   
    }
    state.funds -= price * quantity;
  },
  sellStocks(state, { stockId, price, quantity }) {
   
    const record = state.stocks.find(element => element.id == stockId);
   
    if (record.quantity > quantity) {
      record.quantity -= quantity;
    } else {
      state.stocks.splice(state.stocks.indexOf(record), 1);

    }
    state.funds+= price * quantity;
  }
};
const actions = {
  sellStock({ commit }, order) {
    commit("sellStocks", order);
  }
};

const getters = {
  stockPortfolio(state, getters) {
    return state.stocks.map(stock => {
      const record = getters.stocksgetter.find(
        element => element.id == stock.id
      );
      return {
        id: stock.id,
        quantity: stock.quantity,
        name: record.name,
        price: record.price
      };
    });
  },
  funds(state) {
    return state.funds;
  }
};

export default{
state,
mutations,
getters,
actions


}