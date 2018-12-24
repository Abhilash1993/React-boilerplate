import React, { Component} from 'react';
import {connect} from 'react-redux';
import './home.less';
import history from "../history";

class Home extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount(){
		const { dispatch } = this.props;
		dispatch({type : "CALL_HOME", data : "data"})     //sample saga usage
		
		//use history.push("/about") to navigate
	}
	render() {
		return (
			<div className = "home">
            	Hello 
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		home: state.home
	};
};
  
export default connect(mapStateToProps)(Home);