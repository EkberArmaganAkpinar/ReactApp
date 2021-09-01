import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export class User extends Component {

    render() {
        const { avatar_url, login, name, html_url, blog, followers } = this.props.user;
        return (
        
                <div className="col-md-4 col-sm-6 col-lg-3">
                    <div className="card mt-2">


                        <img src={avatar_url} className="img-fluid"></img>

                        <div className="card-body">
                            <h5 className="card-title">{login}</h5>
                            <Link to={`/user/${login}`} className="btn btn-primary btn-sm">Go Profile</Link>
                        </div>
                    </div>
                </div>

        )
    }
}

export default User
