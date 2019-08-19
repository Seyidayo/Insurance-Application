import { fetchData } from "@/api";
import { applicationApi, token, statisticsApi } from "@/constants";
const actions = {
  async SET_APPLICATIONS({ commit }) {
    try {
      commit("SET_FETCHING_APPLICATIONS", true);
      const { applications } = await fetchData(applicationApi, token);
      commit("SET_APPLICATIONS", applications);
    } catch (error) {
      console.error(error);
    } finally {
      commit("SET_FETCHING_APPLICATIONS", false);
    }
  },

  async SET_STATISTICS({ commit }) {
    try {
      commit("SET_FETCHING_STATISTICS", true);
      const { statistics } = await fetchData(statisticsApi, token);
      commit("SET_STATISTICS", statistics);
    } catch (error) {
      console.error(error);
    } finally {
      commit("SET_FETCHING_STATISTICS", false);
    }
  }
};

export default actions;
