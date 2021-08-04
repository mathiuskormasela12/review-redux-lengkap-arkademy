// ===== Store
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {persistStore} from 'redux-persist';
import rootReducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedStore = () => {
	const store = createStore(
		rootReducers, 
		composeEnhancers(
			applyMiddleware(
				thunk
			)
		)
	);
	const persistor = persistStore(store);

	return {store, persistor}
}

export default persistedStore;