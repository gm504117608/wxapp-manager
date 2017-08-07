import React from 'react';
import { Card } from 'antd';

class TickDemo extends React.Component {

	constructor (props) {
		super(props);
		this.state = {time: new Date().toLocaleTimeString()}; 
	}

	componentDidMount() {
		console.log("componentDidMount");
		this.timerID = setInterval(
			() => this.tick(), 
			1000
		);
	}

	componentWillUnmount() {
		console.log("componentWillUnmount");
		clearInterval(this.timerID);
	}

	tick = () => {
		this.setState({time: new Date().toLocaleTimeString()});
	}

	render () {
		return (<div style={{padding: 20}}> <h1>Hello, world!</h1> 
			<Card bordered>当前时间：{this.state.time}</Card> </div>);
	}
}

export default TickDemo;