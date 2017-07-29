import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Search extends Component {
  onSubmit(e) {
    e.preventDefault();
    let username = this.refs.username.value.trim();
    if (!username) {
      alert("Please enter a username");
      return;
    }
    this.props.onFormSubnmit(username);
    this.refs.username.value = "";
  }

  render() {
    return (
      <div className="Search">
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Searh Github Users</label>
          <input type="text" ref="username" className="form-control" />
        </form>
      </div>
    );
  }
}
