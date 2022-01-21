import { BUY_CAKE } from './Caketype'
const cakeState = {
    numOfCakes:10,
}


const CakeReducer = (state = cakeState, action) => {

    switch (action.type) {
        case BUY_CAKE:
            return {
                ...state,
                numOfCakes:state.numOfCakes - 1
            };
            break;
    
        default: return state;
            break;
    }
}

export default CakeReducer;