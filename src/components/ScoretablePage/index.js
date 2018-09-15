import { connect } from "react-redux";
import ScoretablePageView from "./ScoretablePageView";
import fetchScoretable from "../../actions/scoretable/fetchScoretable";

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.scoretable.loading,
    scoretable: state.scoretable.results
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchScoretable: () => {
      dispatch(fetchScoretable());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoretablePageView);
