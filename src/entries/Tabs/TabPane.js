import React, { Component,PropTypes } from 'react';
import ReactDOM from 'react-dom';
import './tabs.css';
class Tab extends Component {
	constructor(props,context) {
		super(props);
	}
	render() {
		return (
			<div>
				{this.props.children}
			</div>
		);
	}
}

export default Tab;


