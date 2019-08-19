const mutations = {
  SET_APPLICATIONS: (state, applications) =>
    (state.applications.list = applications),
  SET_STATISTICS: (state, statistics) => (state.statistics.list = statistics),
  SET_FETCHING_APPLICATIONS: (state, value) =>
    (state.applications.fetching = value),
  SET_FETCHING_STATISTICS: (state, value) => (state.statistics.fetching = value)
};

export default mutations;
