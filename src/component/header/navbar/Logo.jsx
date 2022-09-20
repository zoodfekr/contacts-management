import { red } from '../../../helpers/colors'
const Logo = () => {
	return (
		<a class="navbar-brand col-12 col-lg-4 text-center" href="#">
			<i class="fa-solid fa-laptop-code px-3" style={{ color: 'gold' }}></i>
			وب اپلیکیشن مدیریت{' '}
			<span className="px-0" style={{ color: "red" }}>مخاطبین</span>
		</a >
	);
}

export default Logo;