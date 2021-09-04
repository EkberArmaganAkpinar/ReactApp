import React, { Component,useContext } from 'react'
import GithubContext from '../context/githubContext'
import { Loading } from './Loading'
 const UserRepos=(props)=> {

    const{userrepo,loading}=useContext(GithubContext)
      
    if (loading)
     return <Loading />
        return (
            <div className="container mt-3">

                <li className="list-group-item">
                    <i className="far fa-dot-circle"></i>
                    <a href={userrepo.html_url}>Project Path:{userrepo.name}</a>
                </li>
                <li className="list-group-item">
                <i className="far fa-dot-circle"></i>
                    Archive Path:{userrepo.archive_url}</li>
                    <li className="list-group-item">
                <i className="far fa-dot-circle"></i>
                    Full Name:{userrepo.full_name}</li>
            </div>
        )
    
}

export default UserRepos
