// ===== Home
import React, {Component, Fragment} from 'react';

// import all components
import {Header, Footer} from '../components';

export class Home extends Component {
  render() {
		return (
			<Fragment>
				<h1>Home</h1>
				<Header />
				<Footer />
			</Fragment>
		);
	}
}