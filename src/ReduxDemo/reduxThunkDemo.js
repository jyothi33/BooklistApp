const redux = require('redux');
const createStore = redux.createStore

const axios = require('axios')
const reduxThunkdef = require('redux-thunk').default;

const applyMiddleware = redux.applyMiddleware


const initialState ={
    loading:false,
    users:[],
    error:''
}

const FETCH_USERS = 'FETCH_USERS';
const  FETCH_USERS_SUCCCES_REQUEST = 'FETCH_USERS_SUCCCES_REQUEST';
const  FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';


const fetchUsersFromApi = () => {
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


const userReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_USERS:
            // return its loading
            return {
                ...state,
                loading:true
            }
            break;
            case FETCH_USERS_SUCCCES_REQUEST:
                return {
                    ...state,
                    loading:false,
                    users: action.payload,
                    error:''
                }
            
            break;
            case FETCH_USERS_FAILURE:
                return {
                    ...state,
                    loading:false,
                    users:[],
                    error:action.payload
                }
            break;
    
        default: return state
            break;
    }
}


const fetchUsers = () => {
    return function(dispatch){
            dispatch(fetchUsersFromApi());

            axios.get("https://jsonplaceholder.typicode.com/users").then (
                response => {
                    const userList = response.data;
                    const usernames = userList.map( userList => userList.name)
                    //console.log(usernames)
                    dispatch(fetchSucces(usernames)); 
                } 
            ).catch( err => dispatch(fetchError(err)))
    } 
}

const newstore = createStore(userReducer, applyMiddleware(reduxThunkdef));
console.log(`Initial State`, newstore.getState())
const unsubscribe = newstore.subscribe( () => console.log('Updated state', newstore.getState()) );
newstore.dispatch(fetchUsers())
