import React,{useContext, useState} from 'react'
import GithubContext from '../context/githubContext'
const Search =({setAlert,showClear,clearUser})=> {
    
    const githubContext=useContext(GithubContext)

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
            
            githubContext.searchUser(keyword)
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
                    showClear&&
                    <button onClick={clearUser} className="btn btn-secondary btn-sm btn-block mt-2">Clear Results</button>

                }

            </div>

        )
    
}

export default Search
