import {connect} from "react-redux";
import LoginModalView from "./LoginModalView";

import loginSuccess from "../../actions/userManagement/loginSuccess";
import loginFailure from "../../actions/userManagement/loginFailure";

const mapStateToProps = (state, ownProps) => {
  return {
      loggedIn: state.userManagement.isLogged
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginSuccess: (username) => {dispatch(loginSuccess(username))},
        loginFailure: () => {dispatch(loginFailure())}
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModalView);