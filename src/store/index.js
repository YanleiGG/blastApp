
import {createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './reducer';
 
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);
 
const store = createStoreWithMiddleware(rootReducer);

export default store
