import {connect} from "react-redux";
import SignupModalView from "./SignupModalView";
import postSignup from "../../actions/userManagement/postSignup";
import closeErrorInfo from "../../actions/userManagement/closeErrorInfo";
import raiseSignupError from "../../actions/userManagement/raiseSignupError";

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.userManagement.loading,
    error: state.userManagement.error,
    loggedIn: state.userManagement.isLogged
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      postSignup: body => {dispatch(postSignup(body))},
      raiseSignupError: () => {dispatch(raiseSignupError())},
      closeErrorInfo: () => {dispatch(closeErrorInfo())}
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupModalView);