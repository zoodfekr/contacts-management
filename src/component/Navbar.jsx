
import Logo from "./Logo";
import { link, Outlet, outlet, useLocation } from 'react-router-dom';
import Addbtn from "./Addbtn";
import { ToastContainer, toast } from 'react-toastify';
import Search from "./search";
import { Location } from "react-router-dom";
import Contacts from "./contacts";
import React, { useEffect } from "react";
import Appcontext from "../context/Appcontext";


function Navbar({ query, finder }) {

	const location = useLocation();

	// const { seterror } = React.useContext(Appcontext);

	// پاک کننده ارورهای yup
	// useEffect(() => {
	// 	if (location.pathname != "/list") {
	// 		seterror([]);
	// 	}
	// }, [location]);

	return (
		<>
			<nav class="navbar navbar-dark navbar-expand-lg bg-light bg-dark shadow-lg" dir="rtl" >
				<div class="container">

					<Logo />

					{location.pathname == "/" ? <Search query={query} finder={finder} /> : null}

				</div >

			</nav >



			<Addbtn />
			<Outlet />
			<ToastContainer position="bottom-center" autoClose={1500}
				hideProgressBar={false}
				newestOnTop={false}
				closeOnClick
				rtl={true}
				pauseOnHover
				theme="colored" />

		</>



	);
}

export default Navbar;