// ===== Root Reducer
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';

// import all reducers
import dataReducer from './data';
import userReducer from './user';

const rootPersistConfig = {
  key: 'root',
	storage,
	blacklist: ['data']
}

const dataPersistConfig = {
	key: 'data',
	storage,
	stateReconciler: hardSet
}

const rootReducer = combineReducers({
	data: persistReducer(dataPersistConfig, dataReducer),
	user: userReducer
});

export default persistReducer(rootPersistConfig, rootReducer);