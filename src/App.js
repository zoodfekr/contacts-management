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
import { createContact, getallcontact, getallgroup, getcontact, getgroup } from './services/contactservices';
import Addcontact from './component/Addcontact';
import { useNavigate } from 'react-router-dom';
import Editor from './component/Editor';


const App = () => {
	const navigate = useNavigate();
	const [preloader, setpreloader] = useState(false);
	const [getcontacts, setcontacts] = useState([]);
	const [getGroups, setGroups] = useState([]);
	let [groupname, setgroupname] = useState({});


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
				setGroups(groupsData);
				setpreloader(false);

			} catch (err) {
				setpreloader(false);
			}
		};
		fetchData();
	}, []);


	const createContactForm = async (event) => {
		event.preventDefault();
		try {
			const { status } = await createContact(contact);
			if (status === 201) {
				setcontact({});
				navigate("/");
			}
		} catch (err) {
			console.log(err.message);
		}
	}
	const setcontactinfo = (event) => {
		setcontact({ ...contact, [event.target.name]: event.target.value });
	}



	return (
		<>
			<Routes>
				<Route path='/' element={[<Navbar />]}>
					<Route path='/' element={<Contacts />}></Route>
					<Route path='/:cid' element={<Clist groupsData={getGroups} />} />
					<Route path='/about' element={<About />}></Route>

					<Route path='/editor/:cid' element={<Editor
						loading={preloader}
						setcontactinfo={setcontactinfo}
						contact={getcontact}
						groups={getGroups}
						createContactForm={createContactForm}
					/>}></Route>

					<Route path='/add' element={<Addcontact
						setcontactinfo={setcontactinfo}
						contact={getcontact}
						groups={getGroups}
						createContactForm={createContactForm}
					/>}></Route>

					<Route path='/list' element={<List />} >

						<Route index element={
							< div className='container justify-content-center d-flex Sticky-top'>
								<img src={require('./assets/clist.jpg')} alt="" className='w-75' style={{ opacity: '0.5', }} />
							</div>
						} />

						<Route path='/list/:cid' element={<Clist groupsData={getGroups} />} />

					</Route>

				</Route>
				<Route path='/*' element={<Error />} />
			</Routes>
		</>
	)
}

export default App;