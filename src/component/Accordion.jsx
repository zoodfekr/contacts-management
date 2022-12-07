import throttle from "lodash.throttle";
import { useCallback } from "react";
import { useState } from "react";
import _ from "lodash";

const Accordion = () => {

	let [count, setcount] = useState(0);

	const logCount = (count) => {
		console.log(`INCREMENT 🐔: ${count} `);
	};

	const throttledLog = useCallback(throttle(logCount, 2500), []);

	const increaseCount = () => {
		setcount(count + 1);
		throttledLog(count);
	};

	let data = [1, 2, 3, 4, 5, 6, 7, 8];
	console.log(_.sum(data));

	return (
		<div className="container border d-flex flex-column justify-content-center p-2">

			<div className="border d-flex justify-content-center p-2">
				<p>{count}</p>
			</div>

			<div>
				<button className="btn btn-success m-2" onClick={increaseCount}>+</button>
				<button className="btn btn-danger m-2" onClick={() => setcount(count - 1)}>-</button>

			</div>


		</div>
	)

};
export default Accordion;


