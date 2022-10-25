import { useMemo } from "react";
import { useEffect, useState } from "react";
import List from "./List";

const Accordion = () => {

	const [colorChange, setcolorChange] = useState(true);
	const [number, setnumber] = useState();

	useEffect(() => {
		console.log("useEffect called", number);
		getitems();
	}, [number]);

	const getitems = () => {
		console.log("getitems");
		const data = [number, parseInt(number) + 2, parseInt(number) + 3];

		if (number) {
			return data.map(x => <p>{x}{x.index}</p>);
		} else {
			return null
		}
	};

	const starter = useMemo(() => (getitems()), [number])

	const paragraphStyle = { backgroundColor: "lightblue", color: "black", fontWeight: "bold", }
	const bgcolor = { backgroundColor: (colorChange ? "#7F8C8D" : "#196F3D ") };

	return (

		<div className="container  py-5" style={bgcolor}>
			<div className="container col-12 col-md-6 d-flex flex-column justify-content-center">

				<input type="number" className="form-control my-2"
					value={number}
					onChange={e => setnumber(e.target.value)} />

				<div className=" d-flex justify-content-center my-2">
					<button className="btn btn-warning" onClick={() => setcolorChange((prevLoading) => !prevLoading)} >تغییر رنگ زمینه</button>
				</div>

				<div className="d-flex justify-content-center my-2 align-items-center p-1 flex-column" style={paragraphStyle}>
					{starter}
				</div>

			</div>
		</div>

	)
};
export default Accordion;