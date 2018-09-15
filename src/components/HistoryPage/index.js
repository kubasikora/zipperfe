import { connect } from "react-redux";
import HistoryPageView from "./HistoryPageView";

import fetchAllFixtures from "../../actions/fixtures/fetchAllFixtures";
import fetchBets from "../../actions/bets/fetchBets";

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.fixtures.loadingAll || state.bets.loading,
    fixtures: state.fixtures.allFixtures.filter(fixture => fixture.final_score !== null),
    bets: state.bets.userBets
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
      fetchAllFixtures: () => {dispatch(fetchAllFixtures())},
      fetchBets: userID => {dispatch(fetchBets(userID))}
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryPageView);
