import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Repo from './Repo';

export default class RepoList extends Component {
  render() {
    return (
      <div className="RepoList">
        <ul className="list-group">
          {
            this.props.userRepos.map(repo => {
              return <Repo
                repo={repo}
                key={repo.id}
                {...this.props} />
            })
          }
        </ul>
      </div>
    );
  }
}
