import {connect} from "react-redux";
import LoginModalView from "./LoginModalView";

import loginSuccess from "../../actions/userManagement/loginSuccess";

const mapStateToProps = (state, ownProps) => {
  return {
      loggedIn: state.userManagement.isLogged
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        loginSuccess: (username) => {dispatch(loginSuccess(username))}
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginModalView);