import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Repo extends Component {
  render() {
    let {repo} = this.props;
    return (
      <li className="list-group-item">
        <a href={repo.html_url}>{repo.name}</a>: {repo.description}
      </li>
    );
  }
}
