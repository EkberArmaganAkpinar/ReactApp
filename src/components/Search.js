import React,{useContext, useState} from 'react'
import GithubContext from '../context/githubContext'
import AlertContext from '../context/alert/alertContext'
const Search =()=> {
    
    const{searchUser,clearUser,users}=useContext(GithubContext)
    const{setAlert}=useContext(AlertContext)

        const[keyword,setKeyword]=useState('')
       
    const onChange = (e) => {
        
        setKeyword(e.target.value)

    }
    const onSubmit = (e) => {
        e.preventDefault();
        if(keyword==="")
        {
            setAlert('Lütfen bir anahtar kelime giriniz','danger')

        }
        else{
            
            searchUser(keyword)
            setKeyword('')
        }

    }

  
        return (
            <div className="container my-3">
                <form onSubmit={onSubmit}>

                    <div className="input-group">
                        <input type="text" value={keyword} className="form-control" onChange={onChange} placeholder="Search for user"></input>
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary">Search</button>
                        </div>
                    </div>
                </form>
                {
                     users.length ?
                    <button onClick={clearUser} className="btn btn-secondary btn-sm btn-block mt-2">Clear Results</button> :null

                }

            </div>

        )
    
}

export default Search
