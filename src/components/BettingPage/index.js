import {connect} from "react-redux";
import BettingPageView from "./BettingPageView";
import fetchAvailableFixtures from "../../actions/fixtures/fetchAvailableFixtures";
import fetchBets from "../../actions/bets/fetchBets";
import closeBetSnackbar from "../../actions/bets/closeBetSnackbar";

const mapStateToProps = (state, ownProps) => {
  return {
      fixtures: state.fixtures.availableFixtures,
      bets: state.bets.userBets,
      loading: state.bets.loading || state.fixtures.loadingAvailable,
      error: state.bets.error,
      postSuccess: state.bets.postSuccess
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      fetchAvailableFixtures: () => {dispatch(fetchAvailableFixtures())},
      fetchBets: (userID) => {dispatch(fetchBets(userID))},
      closeBetSnackbar: () => {dispatch(closeBetSnackbar())}
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BettingPageView);