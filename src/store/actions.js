import { fetchData } from "@/api";
import { applicationApi, token, statisticsApi } from "@/constants";
const actions = {
  async SET_APPLICATIONS({ commit }) {
    try {
      commit("SET_FETCHING_APPLICATIONS", true);
      const { applications } = await fetchData(applicationApi, token);
      commit("SET_APPLICATIONS", applications);
    } catch (error) {
      console.log(error);
    } finally {
      commit("SET_FETCHING_APPLICATIONS", false);
    }
  },

  async SET_STATISTICS({ commit }) {
    try {
      commit("SET_FETCHING_STATISTICS", true);
      const { statistics } = await fetchData(statisticsApi, token);
      console.log({ statistics });
      commit("SET_STATISTICS", statistics);
    } catch (error) {
      console.log(error);
    } finally {
      commit("SET_FETCHING_STATISTICS", true);
    }
  }
};

export default actions;
