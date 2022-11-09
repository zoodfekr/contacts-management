import { useEffect, useState } from "react";

const Accordion = () => {

	const [input, setinput] = useState();
	let data = [];

	useEffect(() => {
		if (input) { Show() };
	}, [input]);


	let Show = () => {
		console.log("show()")
		let count = 0;

		while (count < 1000) {
			data.push(input)
			console.log(data);
			count++;
		}

		return data.map((x) =>
			<div className="container border border-danger m-1 d-flex align-content-center">
				<p className="text-light  d-flex d-flex align-content-center p-0">عدد وارد شده برابر است با: {x}</p>
			</div>)
	}


	return (
		<div className="container">
			<input type="number" className="form-control" onChange={(e) => setinput(e.target.value)} />

			<div className="container border d-flex justify-content-center py-1 my-1 flex-column">
				{input ? Show() : <h5>درحال انتظار.....</h5>}

			</div>

		</div>
	)
};
export default Accordion;