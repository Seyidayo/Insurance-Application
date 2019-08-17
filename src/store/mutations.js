const mutations = {
	SET_APPLICATIONS: (state, payload) => (state.applications.list = payload),
	SET_STATISTICS: (state, payload) => (state.statistics.list = payload),
	SET_FETCHING_APPLICATIONS: (state, value) =>
		(state.applications.fetching = value),
	SET_FETCHING_STATISTICS: (state, value) => (state.statistics.fetching = value)
};

export default mutations;
