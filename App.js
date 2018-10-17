'use strict';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import configureStore from './src/store/index';
import Root from './src/Root'; 

const store = configureStore()

export default class App extends Component{
	constructor(){
		super()
	}
	render(){
		return (
			<Provider store={store}>
				<Root />
			</Provider>
		)
	}
}