import { useReducer } from "react"
import GithubReducer from './githubReducer'
import GithubContext from "./githubContext"
import axios from 'axios'

const Githubstate =(props)=>{
    const initialState={
        users:[],
        user:{},
        repos:[],
        loading:false,
        userrepo:[],
        user_name:""
    }

    const [state,dispatch]=useReducer(GithubReducer,initialState)
    
    const searchUser = (keyword) => {
        setLoading()
       setTimeout(() => {
         axios
           .get(`https://api.github.com/search/users?q=${keyword}`)
           .then(res => {
                 dispatch({
                     type:"SEARCH_USER",
                     payload:res.data.items
                 })
           })
       }, 1000);
   
     }
     const getUser = (username) => {
        setLoading()
        setTimeout(() => {
          axios
            .get(`https://api.github.com/users/${username}`)
            .then(res => {
                 dispatch({
                     type:"GET_USER",
                     payload:res.data
                 })
            
            })
        }, 1000);
    
    
      }
      const getRepoFullName=(uname,reponame)=>{
  
        
        setLoading()    //https://api.github.com/repos/sadikturan/angular-dersleri
        setTimeout(() => {
          axios
            .get(`https://api.github.com/repos/${uname}/${reponame}`)
            .then(res => {
                dispatch({
                  type:"FULL_NAME",
                  payload:res.data
                })
            
            })
        }, 1000);
        
    }
      const getUserName=(username)=>{
         dispatch({
           type:"GET_USER_NAME",
           payload:username
         })
         console.log("username alindi")
        
      }      
    const getUserRepos = (username) => {
        setLoading()
     setTimeout(() => {
       axios
         .get(`https://api.github.com/users/${username}/repos`)
         .then(res => {
            dispatch({
                type:"GET_REPOS",
                payload:res.data
            })
         })
     }, 1000);
 
 
   }
     const clearUser = () => {
        dispatch({
            type:"CLEAR_USERS"
        })
     
       }
     const setLoading =()=>{
         dispatch({type:"SET_LOADING"})
     }

    return <GithubContext.Provider
                     value={{
                         users:state.users,
                         user:state.user,
                         repos:state.repos,
                         loading:state.loading,
                         userrepo:state.userrepo,
                         user_name:state.user_name,
                         searchUser,
                         clearUser,
                         getUser,
                         getUserRepos,
                         getUserName,
                         getRepoFullName

                     }}>
                    {props.children}
    </GithubContext.Provider>
}
export default Githubstate