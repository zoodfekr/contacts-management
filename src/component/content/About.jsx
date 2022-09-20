import Lifecycle from '../Lifecycle';
import Func_clock from '../Func_clock';

const About = () => {
	return (
		<div className="justify-content-center d-flex flex-column container">

			<Lifecycle />

				<h1 className=" text-center">about page</h1>
				<img src={require('../../assets/about.png')} alt="" className='w-100 img-thumbnail rounded' />
		</div>
	)
}
export default About;


