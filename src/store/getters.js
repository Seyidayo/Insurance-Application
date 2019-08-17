const getters = {
	APPLICATIONS: state => state.applications.list,
	STATISTICS: state => state.statistics.list,
	APPLICATIONS_IS_FETCHING: state => state.applications.fetching,
	STATISTICS_IS_FETCHING: state => state.characters.fetching
};

export default getters;
