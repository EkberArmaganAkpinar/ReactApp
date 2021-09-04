const githubReducer=(state,action)=>{

    switch(action.type)
      {
       case "SEARCH_USER":
           return{
               ...state,
               users:action.payload,
               loading:false
           }
           case "GET_USER_NAME":
               return{
                   ...state,
                   user_name:action.payload
                 
               }
            case "FULL_NAME":
                   return{
                       ...state,
                       userrepo:action.payload,
                       loading:false
                   }
           case "SET_LOADING":
               return{
                   ...state,
                   loading:true
               }
            case "CLEAR_USERS":
            return{
                ...state,
                users:[],
                loading:false
            } 
            case "GET_USER":
                return{
                    ...state,
                    user:action.payload,
                    loading:false
                }  
             case "GET_REPOS":
                 return{
                     ...state,
                     repos:action.payload,
                     loading:false
                 }   
               default:
               return state
        
      }

}
export default githubReducer