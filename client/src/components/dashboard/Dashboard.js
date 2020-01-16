import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";

class Dashboard extends Component {
  onLogoutClick = e => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <div id="main">
        <div id="page-content-wrapper"></div>
        <div className="d-flex" id="wrapper">
          {/* <!-- Sidebar --> */}
          <div className="bg-light border-right" id="sidebar-wrapper">
            <div className="sidebar-heading">Start Bootstrap</div>
            <div className="list-group list-group-flush">
              <a
                href="/"
                className="list-group-item list-group-item-action bg-light"
              >
                Dashboard
              </a>
              <a
                href="/"
                className="list-group-item list-group-item-action bg-light"
              >
                Shortcuts
              </a>
              <a
                href="/"
                className="list-group-item list-group-item-action bg-light"
              >
                Overview
              </a>
              <a
                href="/"
                className="list-group-item list-group-item-action bg-light"
              >
                Events
              </a>
              <a
                href="/"
                className="list-group-item list-group-item-action bg-light"
              >
                Profile
              </a>
              <a
                href="/"
                className="list-group-item list-group-item-action bg-light"
              >
                Status
              </a>
            </div>
          </div>
          <div className="container valign-wrapper">
            <div className="row">
              <div className="col s12 center-align">
                <button
                  id="logout-btn"
                  onClick={this.onLogoutClick}
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Logout
                </button>
                <h4>Dont forget to logout {user.name.split(" ")[0]}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logoutUser })(Dashboard);
