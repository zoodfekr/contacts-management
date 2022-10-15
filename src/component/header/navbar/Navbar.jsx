
import Logo from "./Logo";
import { link, Outlet, outlet, useLocation } from 'react-router-dom';
import Addbtn from "../btns/Addbtn";
import { ToastContainer, toast } from 'react-toastify';
import Search from "./search";
import { Location } from "react-router-dom";
import Contacts from "../../content/contact/contacts";

function Navbar({ query, finder }) {

	const location = useLocation();


	return (
		<>
			<nav class="navbar navbar-dark navbar-expand-lg bg-light bg-dark shadow-lg" dir="rtl" >
				{/* <button onClick={props.finder}>eeeee</button> */}
				<div class="container">
					<Logo />
					{location.pathname == "/" ? <Search
						query={query}
						finder={finder}
					/> : null}
			</div >

		</nav >
			<Addbtn />
			<Outlet />
			{/* <Contacts /> */}
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