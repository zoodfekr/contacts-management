import Search from "./Searchbox";
import Logo from "./Logo";
import { link, Outlet, outlet } from 'react-router-dom';
import Addbtn from "../btns/Addbtn";

function Navbar() {

	return (
		<>
			<nav class="navbar navbar-dark navbar-expand-lg bg-light bg-dark shadow-lg" dir="rtl" >
				<div class="container">
					<Logo />
					<Search />
			</div >

		</nav >
			<Addbtn />
			<Outlet />
		</>



	);
}

export default Navbar;