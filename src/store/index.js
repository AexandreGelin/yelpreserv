import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const $api = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/",
  headers: {
    Authorization: "Bearer 0U7vfpOMTkSYRtYTmb7hZKEz2UgyjlmKY_NRf1GJOd9WkKhZLXU3EMxdrbkqgP_QyPitlRs3QD94c2CKNuZq8hM0eRuyP34fUICv10RUlb1gvdVb54TgfP2JnC50YHYx",
  },
});

export default new Vuex.Store({
  state: {
    restaurants: null,
    detailRestaurant: null,
  },
  mutations: {
    setResto(state, restaurants) {
      state.restaurants = restaurants;
    },
    setDetails(state, detailRestaurant) {
      state.detailRestaurant = detailRestaurant
    }
  },
  actions: {
    rechercheResto({ commit }, parameters) {
      const urlParameters = {
        restaurantName: null,
        openNow: false,
        categories: 'restaurants',
      };

      if (parameters) {
        Object.keys(parameters).forEach((index) => {
          urlParameters[index] = parameters[index];
        });
      }

      let queryString = '';
      if (urlParameters.restaurantName) {
        queryString += `&term=${urlParameters.restaurantName}`;
      }
      queryString += `&open_now=${urlParameters.openNow}&categories=${urlParameters.categories}`;

      $api.get(`/businesses/search?location=Lyon${queryString}`)
        .then(({ data }) => {
          commit('setResto', data.businesses);
        });
    },
    getRestoDetail ({ commit }, restaurantAlias) {


      $api.get(`/businesses/${restaurantAlias}`)
        .then(({ data }) => {
          commit('setDetails', data);
        });

    }
  },
  modules: {
  },
});
