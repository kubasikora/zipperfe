import {connect} from "react-redux";
import HeaderView from "./HeaderView";
import Cookies from "js-cookie";

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
      Cookies.remove("authToken");
      Cookies.remove("username");
      dispatch(logout());
      document.location = "/";
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderView);
