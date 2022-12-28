
import Logo from "./Logo";
import { link, Outlet, outlet, useLocation } from 'react-router-dom';
import Addbtn from "./Addbtn";
import { ToastContainer, toast } from 'react-toastify';
import Search from "./search";
import { Location } from "react-router-dom";
import Contacts from "./contacts";
import React, { useEffect } from "react";
import Appcontext from "../context/Appcontext";
import colorfull from "./HOC/Hoc";


function Navbar({ query, finder }) {

	const location = useLocation();

	return (
		<div >
			<nav class="navbar navbar-dark navbar-expand-lg   shadow-lg" dir="rtl" >
				<div class="container" id="top">

					<Logo />

					{location.pathname == "/" ? <Search query={query} finder={finder} /> : null}

				</div >

			</nav >

	


			<Addbtn />
			<Outlet />
			<ToastContainer
				position="top-center"
				autoClose={1500}
				hideProgressBar
				newestOnTop
				closeOnClick
				rtl={true}
				pauseOnFocusLoss
				draggable
				pauseOnHover
				theme="colored"
			/>

			<div>
				<a href="#top" className="fixed-bottom ">
					<img src={require('../assets/top-bottom.jpg')} alt="" width="80px" style={{ borderRadius: "80px 80px 0 0", overflow: "hidden" }} /><br />
				</a>
			</div>


		</div>



	);
}

export default colorfull(Navbar);
