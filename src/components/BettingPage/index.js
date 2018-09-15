import {connect} from "react-redux";
import BettingPageView from "./BettingPageView";
import fetchAvailableFixtures from "../../actions/fixtures/fetchAvailableFixtures";
import fetchBets from "../../actions/bets/fetchBets";

const mapStateToProps = (state, ownProps) => {
  return {
      fixtures: state.fixtures.availableFixtures,
      bets: state.bets.userBets,
      loading: state.bets.loading || state.fixtures.loading
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchAvailableFixtures: () => {dispatch(fetchAvailableFixtures())},
      fetchBets: (userID) => {dispatch(fetchBets(userID))}
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BettingPageView);