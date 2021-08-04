// ===== Header
import React, {Fragment, Component} from 'react';
import {connect} from 'react-redux';
import {counter} from '../redux/actions/counter';
import {handleChange} from '../redux/actions/user';

class HeaderComponent extends Component {
	constructor(props) {
		super(props);

		this.handleIncrement = this.handleIncrement.bind(this);
	}

	handleIncrement(e) {
		e.preventDefault();
		this.props.setCounter();
	}

	render() {
		return (
			<Fragment>
				<button type="submit" onClick={this.handleIncrement}>Clicked {this.props.data.count} times</button>
				<br />
				<br />
				<input type="text" placeholder="nama" onChange={(e) => this.props.handleChange(e.target.value)} value={this.props.user.nama} />
				<p>{this.props.user.nama}</p>
			</Fragment>
		);
	}
}

const mapStateToProps = state => {
	return {
		data: state.data,
		user: {
			nama: state.user.nama
		}
	}
}

const mapDispatchToProps = {
	setCounter: counter,
	handleChange
}

export const Header = connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);