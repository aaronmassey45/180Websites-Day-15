import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RepoList from './RepoList';

export default class Profile extends Component {
  render() {
    return (
      <div className="Profile">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">{this.props.userData.name}</h3>
          </div>
          <div className="panel-body">
            <div className="row">
              <div className="col-md-4">
                <img src={this.props.userData.avatar_url} className="thumbnail" style={{width: "100%"}} alt="User Avatar" />
              </div>
              <div className="col-md-8">
                <div className="row">
                  <div className="col-md-12">
                    <span className="label label-primary">Repos: {this.props.userData.public_repos}</span>
                    <span className="label label-success">Public Gists: {this.props.userData.public_gists}</span>
                    <span className="label label-info">Followers: {this.props.userData.followers}</span>
                    <span className="label label-danger">Following: {this.props.userData.following}</span>
                  </div>
                </div>
                <hr/>
                <div className="row">
                  <div className="col-md-12">
                    <ul className="list-group">
                      <li className="list-group-item"><strong>Username:</strong> {this.props.userData.login}</li>
                      <li className="list-group-item"><strong>Location:</strong> {this.props.userData.location}</li>
                      <li className="list-group-item"><strong>Email Address:</strong> {this.props.userData.email}</li>
                      <li className="list-group-item"><strong>Website/Blog:</strong> {this.props.userData.blog}</li>
                      <li className="list-group-item"><strong>Company:</strong> {this.props.userData.company}</li>
                    </ul>
                  </div>
                </div>
                <br />
                <a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>Visit Profile</a>
              </div>
            </div>
            <hr />
            <h3>User Repositories</h3>
            <RepoList userRepos={this.props.userRepos} />
          </div>
        </div>
      </div>
    );
  }
}
