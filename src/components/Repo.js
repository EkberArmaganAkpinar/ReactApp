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
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export class Repo extends Component {
  
    onClick=()=>{
     
        this.props.getRepoFullName(this.props.repo.name)
    }
    render() {
        return (
            <li className="list-group-item">
                <i className="far fa-dot-circle"></i>
                <Link to={`/user/${this.props.repo.full_name}`} onClick={this.onClick} > {this.props.repo.name}</Link>
               
            </li>
        )
    }
}

export default Repo
