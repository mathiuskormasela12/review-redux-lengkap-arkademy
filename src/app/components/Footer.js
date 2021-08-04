// ===== Footer
import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';

class FooterComponent extends Component {
	render() {
		return (
			<Fragment>
				{this.props.count < 1 && <p>Empty</p>}
			</Fragment>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		count: state.data.count
	}
}

export const Footer = connect(mapStateToProps, null)(FooterComponent)