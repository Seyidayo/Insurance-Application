import { fetchData } from "@/api";
import { applicationApi, token, statisticsApi } from "@/constants";
const actions = {
	async SET_APPLICATIONS({ commit }) {
		try {
			commit("SET_FETCHING_APPLICATIONS", true);
			const value = await fetchData(applicationApi, token);
			const { applications } = value;
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
			const value = await fetchData(statisticsApi, token);
			const { statistics } = value;
			commit("SET_APPLICATIONS", statistics);
		} catch (error) {
			console.log(error);
		} finally {
			commit("SET_FETCHING_STATISTICS", true);
		}
	}
};

export default actions;
