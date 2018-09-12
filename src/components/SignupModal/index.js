import {connect} from "react-redux";
import SignupModalView from "./SignupModalView";


const mapStateToProps = (state, ownProps) => {
  return {
      loggedIn: state.userManagement.isLogged
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
    };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupModalView);