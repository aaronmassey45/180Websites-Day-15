import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Navbar from './navbar';
import Profile from './components/Profile';
import Search from './components/Search';
import $ from 'jquery';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "aaronmassey45",
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }

  //Get user data from github
  getUserData() {
    $.ajax({
      url: "https://api.github.com/users/"+this.state.username+"?client_id="+this.props.clientID+"&client_secret+"+this.props.clientSecret,
      dataType: "json",
      cache: "false",
      success: function (data) {
        this.setState({userData: data});
      }.bind(this),
      error: function (xhr, status, error) {
        this.setState({username: null});
        alert(error);
      }.bind(this)
    });
  }

  //Get user repos from github
  getUserRepos() {
    $.ajax({
      url: "https://api.github.com/users/"+this.state.username+"/repos?per_page="+this.state.perPage+"&client_id="+this.props.clientID+"&client_secret+"+this.props.clientSecret+"&sort=created",
      dataType: "json",
      cache: "false",
      success: function (data) {
        this.setState({userRepos: data});
      }.bind(this),
      error: function (xhr, status, error) {
        this.setState({username: null});
        alert(error);
      }.bind(this)
    });
  }

  handleFormSubmit(username) {
    this.setState({username: username}, function () {
      this.getUserData();
      this.getUserRepos();
    });
  }

  componentDidMount() {
    this.getUserData();
    this.getUserRepos();
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Search onFormSubnmit={this.handleFormSubmit.bind(this)}/>
              <Profile {...this.state} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

App.propTypes = {
  clientID: PropTypes.string,
  clientSecret: PropTypes.string
}
App.defaultProps = {
  clientID: "9c31cd0e1e5e46aa4c26",
  clientSecret: "88b1e38282e6d5222a85aa19b26ee55e6c1e97f4"
}
