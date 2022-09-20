import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './component/header/navbar/Navbar';
import Contacts from './component/content/contact/contacts';
import Addbtn from './component/header/btns/Addbtn';
import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import About from './component/content/About';
import List from './component/content/List';
import Clist from './component/content/contact/Clist';
import Error from './component/Error';
import './App.css';
import axios from 'axios';
import {getallcontact,getallgroup} from './services/contactservices';
import Addcontact from './component/Addcontact';


const App = () => {
	const [preloader, setpreloader] = useState(false);
	const [getcontacts, setcontacts] = useState([]);
	const [getgroup, setgroup] = useState([]);
	//نوشته شود/////////////////////////////////
	const [contact, setcontact] = useState({
		fullname: "",
		photo: "",
		mobile: "",
		email: "",
		job: "",
		group: ""
	})

	useEffect(() => {
		const fetchData = async () => {
			try {
				setpreloader(true);
				let { data: contactdata } = await getallcontact();
				let { data: groupsData } = await getallgroup();
				setcontacts(contactdata);
				setgroup(groupsData);
				console.log("دریافت دیتا از سرور", contactdata);
				setpreloader(false);

			} catch (err) {
				console.log('مشکل دریافت دیتا');
				setpreloader(false);
			}
		};

		fetchData();

	}, []);

	// نوشته شود/////////////////////////////////////
	const setcontactinfo = (event) => {
		setcontact({ ...contact, [event.target.name]: [event.target.value] });
	}

	return (
		<>
			<Routes>
				<Route path='/' element={[<Navbar />]}>
					<Route path='/' element={<Contacts />}></Route>
					<Route path='/about' element={<About />}></Route>
					<Route path='/add' element={<Addcontact loading={preloader}
						setcontactinfo={setcontactinfo}
						contact={getgroup}
					/>}></Route>

					<Route path='/list' element={<List />} >

						<Route index element={
							< div className='container justify-content-center d-flex Sticky-top'>
								<img src={require('./assets/clist.jpg')} alt="" className='w-75' style={{ opacity: '0.5', }} />
							</div>
						} />

						<Route path='/list/:cid' element={<Clist />} />

					</Route>

				</Route>
				<Route path='*' element={<Error />} />
			</Routes>
		</>
	)
}

export default App;