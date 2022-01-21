import { FETCH_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCCES_REQUEST } from "./UserType"
import axios from 'axios';

const fetchUsersFromApi = () => {
    console.log("fetchusersfrompi")
    return {
        type:FETCH_USERS
    }
}

const fetchSucces = users => {
    return{
        type:FETCH_USERS_SUCCCES_REQUEST,
        payload: users
    }
}

const fetchError = err => {
    return{
        type:FETCH_USERS_FAILURE,
        payload:err
    }
}

export const fetchUsers = () => {
    
    return (dispatch) => {
        
            dispatch(fetchUsersFromApi());
            
            axios.get("https://jsonplaceholder.typicode.com/users").then (
                response => {
                    const userList = response.data;
                    const usernames = userList.map( userList => userList.name)
                    //console.log(usernames)
                    dispatch(fetchSucces(userList)); 
                } 
            ).catch( err => dispatch(fetchError(err.message)
            ))
    } 
}