import {connect} from "react-redux";
import SignupModalView from "./SignupModalView";

import fetchLoginState from "../../actions/userManagement/fetchLoginState";

const mapStateToProps = (state, ownProps) => {
  return {
      loggedIn: state.userManagement.isLogged
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchLoginState: () => {dispatch(fetchLoginState())}
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupModalView);