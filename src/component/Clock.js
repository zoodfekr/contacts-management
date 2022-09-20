
import { Component } from "react";

class Clock extends Component {

	constructor() {
		super();
		console.log('clock - constructor');
	}

	render() {
		console.log('clock - render');

		const { date, color } = this.props;

		const style = {
			background: color ? "black" : "red",
			padding: '15px',
			borderRadius: '50px'
		};

		return (
			<p className="text-white my-1 align-self-center" style={style}>
				ساعت کنونی سیستم: {date.toLocaleTimeString()}
			</p >
		)
	}

	componentDidMount() {
		console.log("clock - componentDidMount");
	}
	componentWillUnmount() {
		console.log("clock - componentWillUnmount");
	}
}
export default Clock;