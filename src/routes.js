import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "./home/home";
import About from "./about/about-loader";
import history from "./history";

const Root = ({ store }) => (
	<Provider store={store}>
		<Router history = {history}>
			<div>
				<Route exact path="/" component={App} />
				<Route path="/about" component={About} />
			</div>
		</Router>
	</Provider>
);

export default Root;


