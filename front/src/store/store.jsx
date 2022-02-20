import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import mainReducer from './reducers/MainReducer';
import loadAuthReducer from './reducers/LoadAuthReducer';
import categoryReducer from './reducers/CategorisReducer';
import bouquetReducer from './reducers/BouquetReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './reducers/CartReducer';
import settingsReducer from './reducers/SettingsReducer';

const reducer = combineReducers({
    mainReducer, loadAuthReducer, categoryReducer, bouquetReducer, cartReducer, settingsReducer,
});

const store = createStore(reducer, composeWithDevTools(
    applyMiddleware(thunkMiddleware)
));

export default store;