//import React from 'react'
//import {Link} from 'react-router-dom'

/*const Repo = (props) => {

     
    return (
       <li className="list-group-item">
           <i className="far fa-dot-circle"></i>
           <Link to={`/user/${props.repo.full_name}`}> {props.repo.name}</Link>
      </li>
    )
}
export default Repo;*/
import React, { Component ,useContext} from 'react'
import { Link } from 'react-router-dom'
import GithubContext from '../context/githubContext';
const Repo =(props)=>{
    const{user,getRepoFullName}=useContext(GithubContext)
   const onClick=()=>{
       
     getRepoFullName(user.login,props.repo.name)
    }
   
        return (
            <li className="list-group-item">
                <i className="far fa-dot-circle"></i>
                <Link to={`/user/${props.repo.full_name}`} onClick={onClick} > {props.repo.name}</Link>
               
            </li>
        )
    
}

export default Repo
