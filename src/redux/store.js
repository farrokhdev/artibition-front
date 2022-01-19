import {createStore, combineReducers, applyMiddleware} from "redux";
import  authReducer from '../redux/reducers/auth/auth.reducer';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { composeWithDevTools } from 'redux-devtools-extension';


const middleware = [thunk];
const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, combineReducers({
    authReducer,

}));
let store = createStore(
    persistedReducer, 
    composeWithDevTools(applyMiddleware(...middleware))

);
let persistor = persistStore(store);
export default store;
export {persistor};