import {connect} from "react-redux";
import ScoretablePageView from "./ScoretablePageView";
import fetchScoretable from "../../actions/scoretable/fetchScoretable";

const mapStateToProps = (state, ownProps) => {
  return {

  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchScoretable: () => {dispatch(fetchScoretable())}
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ScoretablePageView);