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
        userrepo:[]
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
                         searchUser,
                         clearUser,
                         getUser

                     }}>
                    {props.children}
    </GithubContext.Provider>
}
export default Githubstate