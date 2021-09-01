import React, { Component } from 'react'

export class UserRepos extends Component {

    
    render() {
        return (
            <div className="container mt-3">

                <li className="list-group-item">
                    <i className="far fa-dot-circle"></i>
                    <a href={this.props.userrepo.html_url}>Project Path:{this.props.repo_name}</a>
                </li>
                <li className="list-group-item">
                <i className="far fa-dot-circle"></i>
                    Archive Path:{this.props.userrepo.archive_url}</li>
                    <li className="list-group-item">
                <i className="far fa-dot-circle"></i>
                    Full Name:{this.props.userrepo.full_name}</li>
            </div>
        )
    }
}

export default UserRepos
