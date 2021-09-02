import { useReducer } from "react"
import GithubReducer from './githubReducer'
import GithubContext from "./githubContext"
import axios from 'axios'
import { stat } from "fs"
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
                         searchUser

                     }}>
                    {props.children}
    </GithubContext.Provider>
}
export default Githubstate