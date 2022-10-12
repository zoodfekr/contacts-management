
import Logo from "./Logo";
import { link, Outlet, outlet } from 'react-router-dom';
import Addbtn from "../btns/Addbtn";
import { ToastContainer, toast } from 'react-toastify';

function Navbar() {

	return (
		<>
			<nav class="navbar navbar-dark navbar-expand-lg bg-light bg-dark shadow-lg" dir="rtl" >
				<div class="container">
					<Logo />

			</div >

		</nav >
			<Addbtn />
			<Outlet />
			<ToastContainer
				position="bottom-center"
				autoClose={1500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={true}
				pauseOnHover
				theme="colored"
			/>
		</>



	);
}

export default Navbar;