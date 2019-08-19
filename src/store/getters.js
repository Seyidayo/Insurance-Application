import { prepareApplications, prepareStats } from "../utils";
const getters = {
  APPLICATIONS: state => prepareApplications(state.applications.list),
  STATISTICS: state => prepareStats(state.statistics.list),
  // STATISTICS: state => state.statistics.list,
  APPLICATIONS_IS_FETCHING: state => state.applications.fetching,
  STATISTICS_IS_FETCHING: state => state.statistics.fetching
};

export default getters;
