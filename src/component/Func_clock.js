import { useEffect, useState } from "react";

const Func_clock = ({ date, color, name }) => {
	const style = {
		background: color ? "tomato" : "black",
		padding: '15px',
		borderRadius: '50px'
	};

	useEffect(() => {
		console.log('useEffect() - update');
	}, [color, date])


	useEffect(() => {
		return () => {
			console.log('useEffect() - unmount')
		}
	}, [])


	return (
		<>
			<p className="text-white my-1 align-self-center" style={style}>
				ساعت کنونی سیستم:{date.toLocaleTimeString()}
			</p >
		</>
	)
};

export default Func_clock;