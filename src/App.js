import React, { useState} from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Navbar from './components/Navbar'
import Users from './components/Users'
import axios from 'axios'
import Search from './components/Search'
import Alert from './components/Alert'
import About from './components/About'
import UserDetails from './components/UserDetails'
import UserRepos from './components/UserRepos'


const App =()=>{
      const[users,setUsers]=useState([])
      const[user,setUser]=useState({})
      const[loading,setLoading]=useState(false)
      const[alert,setAlert]=useState(null)
      const[repos,setRepos]=useState([])
      const[repo_name,setRepoName]=useState(null)
      const[user_name,setUserName]=useState(null)
      const[userrepo,setUserRepo]=useState([])


  const searchUser = (keyword) => {
     setLoading(true)
    setTimeout(() => {
      axios
        .get(`https://api.github.com/search/users?q=${keyword}`)
        .then(res => {
           setUsers(res.data.items)
           setLoading(false)
        })
    }, 1000);

  }
  const clearUser = () => {
   setUsers([])

  }

  const getUser = (username) => {
    setLoading(true)
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}`)
        .then(res => {
          setUser(res.data)
          setLoading(false)
        
        })
    }, 1000);


  }
  const getUserRepos = (username) => {
       setLoading(true)
    setTimeout(() => {
      axios
        .get(`https://api.github.com/users/${username}/repos`)
        .then(res => {
          setRepos(res.data)
          setLoading(false)
        })
    }, 1000);


  }
 

  
const getRepoFullName=(reponame)=>{
  
    setRepoName(reponame)
    setLoading(true)    //https://api.github.com/repos/sadikturan/angular-dersleri
    setTimeout(() => {
      axios
        .get(`https://api.github.com/repos/${user_name}/${reponame}`)
        .then(res => {
             setUserRepo(res.data)
             setLoading(false)
        
        })
    }, 1000);
    
}
const getUserName=(username)=>{
  setUserName(username)

}


  const showAlert = (msg, type) => {

    setAlert({ msg, type } )
    

    setTimeout(() => {
      setAlert({alert:null})
    }, 3000);
  }



    return (
      <BrowserRouter>
        <Navbar />
        <Alert alert={alert} />
        <Switch>
          <Route exact path="/" render={props => (

            <>
              <Search setAlert={showAlert} clearUser={clearUser} search={searchUser} showClear={users.length > 0 ? true : false} />
              <Users users={users} loading={loading} />
            </>
          )

          } />
          <Route path="/about" component={About} />
          <Route exact path="/user/:login" render={props => (

            <UserDetails getUserRepos={getUserRepos} getUserName={getUserName} 
            getRepoFullName={getRepoFullName} 
            {...props} getUser={getUser} user={user} repos={repos} loading={loading} />


          )} />

          <Route path="/user/:full_name" render={props => (

            <UserRepos repo_name={repo_name} userrepo={userrepo} getRepoFullName={getRepoFullName} {...props}/>


          )} />



        </Switch>
      </BrowserRouter>
    )
  
}

export default App
