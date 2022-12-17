import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './component/Navbar';
import Contacts from './component/contacts';
import Addbtn from './component/Addbtn';
import { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import About from './component/About';
import List from './component/List';
import Clist from './component/Clist';
import Error from './component/Error';
import './App.css';
import axios from 'axios';
import { createContact, getallcontact, getallgroup, getcontact, getgroup } from './services/contactservices';
import Addcontact from './component/Addcontact';
import { useNavigate } from 'react-router-dom';
import Editor from './component/Editor';
import 'react-confirm-alert/src/react-confirm-alert.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appcontext from '../src/context/Appcontext'
import Admin from './component/Admin';
import { DebounceInput } from 'react-debounce-input';
import { contactSchema } from './validation/validation';
import Capabilities from './component/Capabilities';
import { useImmer } from 'use-immer';



const App = () => {

	const navigate = useNavigate();
	const [preloader, setpreloader] = useState(false);
	const [getcontacts, setcontacts] = useState([]);
	const [getGroups, setGroups] = useState([]);
	let [groupname, setgroupname] = useState({});
	let [query, setquery] = useImmer({ text: "" });
	// const [error, seterror] = useState([]);
	let location = useLocation();

	const [getFilteredContacts, setFilteredContacts] = useState();
	const [contact, setcontact] = useState()
	const tester = getcontacts;
	const tester2 = "0";

	let timer;
	const finder = (event) => {
		clearTimeout(timer);
		timer = setTimeout(() => { setquery(draft => { draft.text = event.target.value }) }, 300);
	}

	useEffect(() => { setquery(draft => { draft.text = null }) }, [location]);


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




	const createContactForm = async values => {
		try {
			const { status } = await createContact(values);
			if (status === 201) {
				toast.success("مخاطب ساخته شد")
				navigate("/");
			} else {
				toast.error("مخاطب ساخته نشد")
			}
		} catch (err) {
			console.log("پیام", err.message);
			if (err.message == "Network Error") {
				toast.error("قطع ارتباط با سرور")
			}
		}
	}

	const setcontactinfo = (values) => {
		console.log("داده", values)
		setcontact(values);
		createContactForm(values)
	}

	return (
		<>

			<Appcontext.Provider >


				<Routes>

					<Route path='/' element={[<Navbar finder={finder} query={query} />]}>
						<Route path='/admin' element={<Admin />} />
						<Route path='/' element={<Contacts getFilteredContacts={getFilteredContacts} query={query} />}></Route>
						<Route path='/:cid' element={<Clist groupsData={getGroups} />} />
						<Route path='/Capabilities' element={<Capabilities></Capabilities>}></Route>
						<Route path='/about' element={<About />}></Route>
						<Route path='/editor/:cid' element={<Editor loading={preloader} setcontactinfo={setcontactinfo} contact={getcontact} groups={getGroups} createContactForm={createContactForm} />}></Route>
						<Route path='/add' element={<Addcontact setcontactinfo={setcontactinfo} contact={getcontact} groups={getGroups} createContactForm={createContactForm} />}></Route>
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

			</Appcontext.Provider>

		</>



	)
}

export default App;