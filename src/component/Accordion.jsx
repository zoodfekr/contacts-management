const Accordion = () => {

	let timer;
	let h3 = document.getElementById("book");

	const data = () => {
		clearTimeout(timer);
		timer = setTimeout(() => { h3.innerHTML = "ramin" }, 2000)
	}

	const reset = () => {
		h3.innerHTML = null;
	}

	return (
		<div className="container border d-flex flex-column justify-content-center p-2">

			<div className="my-2 border p-2">
				<h1>تست setTimeout</h1>
				<h3 id="book"></h3>
			</div>

			<div className="border p-2">
				<button className="btn btn-success mx-3" onClick={data}>start</button>
				<button className="btn btn-danger mx-3" onClick={() => { clearTimeout(timer) }}>stop</button>
			</div>

			<div className="border p-2  my-2">
				<button className="btn btn-warning" onClick={reset}>reset</button>
			</div>

		</div>
	)

};
export default Accordion;


