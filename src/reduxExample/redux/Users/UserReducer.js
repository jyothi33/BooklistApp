import { FETCH_USERS, FETCH_USERS_FAILURE, FETCH_USERS_SUCCCES_REQUEST } from "./UserType";

const user = {
    loading:false,
    users:[],
    error:''
}

export const UserReducer = (state = user, action) => {

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
                console.log("within error")
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