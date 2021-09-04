import React, { useState} from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import Navbar from './components/Navbar'
import Users from './components/Users'
import Search from './components/Search'
import Alert from './components/Alert'
import About from './components/About'
import NotFound from './components/NotFound'
import UserDetails from './components/UserDetails'
import UserRepos from './components/UserRepos'
import Githubstate from './context/githubState'
import Alertstate from './context/alert/alertState'

const App =()=>{
    
    return (
      <Githubstate>
        <Alertstate>
         <BrowserRouter>

        <Navbar />
        <Alert />
        <Switch>
          <Route exact path="/" render={props => (

            <>
              <Search />
              <Users />
            </>
          )

          } />
          <Route path="/about" component={About} />
          <Route exact path="/user/:login" render={props => (

            <UserDetails 
            
            {...props}   />


          )} />

          <Route path="/user/:full_name" render={props => (

            <UserRepos/>


          )} />
          <Route component={NotFound}/>



        </Switch>
      </BrowserRouter>
      </Alertstate>
      </Githubstate>
    )
  
}

export default App
