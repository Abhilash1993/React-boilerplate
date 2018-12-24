import Loadable from "react-loadable";
import React from 'react';

const Loading = () => <div>Loading...</div>;

 //code splitting magic code here
 
const LoadableComponent = Loadable({
	loader: () => import("./about"),
	loading: Loading
});

export default class LoadableDashboard extends React.Component {
	render() {
		return <LoadableComponent />;
	}
}