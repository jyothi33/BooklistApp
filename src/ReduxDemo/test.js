
const redux = require('redux');
const createStore = redux.createStore
const combineReducers = redux.combineReducers;

const reduxLogger = require('redux-logger');

const logger = reduxLogger.createLogger();

const applyMiddleware = redux.applyMiddleware


const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

const cakeAction = {
    type: BUY_CAKE
}

const buyIcrecream = () => {
    return {
        type:BUY_ICECREAM
    }
}

const cakeState = {
    numOfCakes:10,
}

const icecreamState = {
    numOfIcecreams:20,
}

//reducer = (prevState, action) = newState


const cakeReducer = (state = cakeState, action) => {

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

const icecreamReducer = (state = icecreamState, action) => {

    switch (action.type) {
            case BUY_ICECREAM:
            return {
                ...state,
                numOfIcecreams:state.numOfIcecreams - 1
            };
            break;
    
        default: return state;
            break;
    }
}

const reducer = combineReducers({
    cake:cakeReducer,
    icecream:icecreamReducer
})

const store = createStore(reducer, applyMiddleware(logger));

console.log(store)

console.log('Initial State',store.getState());

const unsubscribe = store.subscribe( () => {});

store.dispatch(cakeAction);

store.dispatch(cakeAction);

store.dispatch(cakeAction);

store.dispatch(buyIcrecream());
store.dispatch(buyIcrecream());

store.dispatch(cakeAction);