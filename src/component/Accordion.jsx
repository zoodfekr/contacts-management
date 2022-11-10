import { useMemo } from "react";
import { useTransition } from "react";
import { useEffect, useState } from "react";
import Spiner from "./Preloader";

const Accordion = () => {
	let [input, setinput] = useState();
	let [list, setlist] = useState();

	let [ispending, startTransition] = useTransition();


	const handleChange = (e) => {

		setinput(e.target.value);
		let data = [];
		let count = 0;

		startTransition(() => {
			while (count < 1000) {
				data.push(e.target.value);
				count++;
			}
			setlist(data);
			console.log("data set()");
		})
	}

	const listmap = list.map((x) =>
		<div className="container border border-danger m-1 d-flex align-content-center">
			<p className="text-light  d-flex d-flex align-content-center p-0">عدد وارد شده برابر است با: {x}</p>
		</div>);

	const loading = <div className="container  d-flex justify-content-center"><Spiner></Spiner></div>;

	return (
		<div className="container">
			<input type="number" className="form-control" onChange={handleChange} />
			<div className="container  d-flex justify-content-center py-1 my-1 flex-column">
				{input ? (ispending ? loading : listmap) : null}
			</div>
		</div>
	)
};
export default Accordion;