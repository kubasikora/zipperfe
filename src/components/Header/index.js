import {connect} from "react-redux";
import HeaderView from "./HeaderView";

import logout from "../../actions/userManagement/logout";

const mapStateToProps = (state, ownProps) => {
  return {
    loading: state.userManagement.loading,
    isLogged: state.userManagement.isLogged,
    login: state.userManagement.login
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderView);
