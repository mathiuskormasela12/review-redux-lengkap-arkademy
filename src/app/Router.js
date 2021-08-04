// ====== Router
import React, {Fragment} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistedStore from './redux/store';

// import all screens
import { Home } from './views';

function Router() {
	const {store, persistor} = persistedStore();
	return (
		<Fragment>
			<Provider store={store}>
				<PersistGate persistor={persistor}>
					<BrowserRouter>
						<Switch>
							<Route path="/" exact component={Home} />
						</Switch>
					</BrowserRouter>
				</PersistGate>
			</Provider>
		</Fragment>
	);
}

export default Router;