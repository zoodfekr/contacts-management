
const colorfull = (Wrappedcomponent) => {

	let colors = ["#7D3C98", '#2874A6', '#A04000', '#273746'];

	let randmcolor = colors[Math.floor(Math.random() * 6)];


	let style = { backgroundColor: `${randmcolor}` };


	return (props) => {
		return <div style={style}>
			<Wrappedcomponent {...props} />
		</div>
	}


};

export default colorfull;