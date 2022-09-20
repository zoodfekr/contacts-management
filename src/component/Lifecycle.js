import { Component } from "react";

import Clock from "./Clock";
import Func_clock from './Func_clock';

class Lifecycle extends Component {
	constructor() {
		super();
		console.log('parent - constructor');
		this.state = {
			date: new Date(),
			showClock: true,
			color: false,
			dis: true
		};
	}
	render() {
		console.log('parent - render');
		const { date, color, dis, showClock } = this.state;
		const style = {
			display: 'flex',
			padding: '10px',
			justifyContent: 'space-around'
		}
		const diss = { display: dis ? null : "none" }

		const name = 'ramin';
		return (
			< div className=" " style={style}>
				<div className="d-flex justify-content-center">
					<button className="btn btn-danger  mx-1" onClick={() => this.Show()}>نمایش</button>
					<button className="btn btn-primary  mx-1" onClick={() => this.color()} style={diss}>تغییر رنگ</button>
				</div>
				{showClock ? <Clock date={date} color={color} /> : null}
				{showClock ? <Func_clock date={date} color={color} name={name} /> : null}
			</div >
		)
	}
	componentDidMount() {
		console.log("parent - componentDidMount");
		this.timer = setInterval(() => this.tick(), 1000)
	}
	componentWillUnmount() {
		console.log("parent - componentWillUnmount");
		clearInterval(this.timer);
	}
	tick() {
		if (this.state.showClock) {
			this.setState({ date: new Date() });
			console.log('new date')
		}
	}
	Show() {
		this.setState({ showClock: !this.state.showClock });
		this.setState({ dis: !this.state.dis });
	}
	color() {
		this.setState({ color: !this.state.color })
	}
}


export default Lifecycle
