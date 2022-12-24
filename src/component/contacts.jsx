import Contact from './contact';
import Spiner from './Preloader';
import { getallcontact, getallgroup, deletecontact } from '../services/contactservices';
import React, { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Appcontext from '../context/Appcontext';
import Preloader from '../component/Preloader'



const Contacts = (props) => {

	const user = React.useContext(Appcontext)
	const [preloader, setpreloader] = useState(false);
	const [getgroup, setgroup] = useState([]);
	const [contacts, setcontacts] = useState([]);
	const [query, setquery] = useState([]);


	useEffect(() => {
		const fetchData = async () => {
			try {
				setpreloader(true);
				let { data: contactdata } = await getallcontact();
				let { data: groupsData } = await getallgroup();
				setcontacts(contactdata);
				setgroup(groupsData);
				setpreloader(false);
			} catch (err) {
				setpreloader(false);
			}
		};

		fetchData();
	}, []);


	//toast
	const clear = (event) => {
		confirmAlert({
			customUI: ({ onClose }) => {
				return (
					<div className='custom-ui '>
						<div className='border border-danger p-5 container' style={{
							backgroundColor: "#E5E8E8",
							borderRadius: "25px"
						}} dir='rtl'>
							<h3 className='text-danger'>{`حذف ${event.fullname}`}</h3>
							<p className='text-dark'>آیا مطمئن هستید؟</p>

							<button className='btn btn-primary mx-1' onClick={onClose}>خیر</button>
							<button
								className='btn btn-danger mx-1'
								onClick={() => {
									remover(event); onClose();
								}}
							>
								بله
							</button>
						</div>

					</div>
				);
			}
		});

	};

	const remover = async (event) => {
		try {
			setpreloader(true);
			const box = await deletecontact(parseInt(event.id));
			if (box.status == 200) {
				toast.success("مخاطب حذف شد")
				let { data: contactdata } = await getallcontact();
				setcontacts(contactdata);
				setpreloader(false);
			} else {
				toast.err("مشکلی پیش آمده")
			}
		} catch (err) {
			console.log(err.message);
		}
	}


	// const notfound = <div className=' text-center py-2  rounded'>
	// 	<img src={require('../assets/no-found.gif')} alt="notfound" className='w-50' />
	// 	<p className='' style={{ fontSize: '25px' }}>مخاطب یافت نشد...</p>
	// </div>;

	const notfound = <Preloader></Preloader>




	const input = (g) => {
		let input = props.query.text;
		if (input) {
			return g.fullname.toLowerCase().includes(input);
		} else {
			return true;
		}
	}

	const showcontact = (c) => <Contact key={c.id} contacts={c} clear={clear} />;


	const show = contacts.length > 0 ? contacts.filter(input).map(showcontact) : notfound;


	return (
		<div className=" container p-0 d-flex flex-row flex-wrap justify-content-center" dir="rtl" style={{ boxSizing: "border-box" }}>
			{preloader ? <Spiner /> : null}
			{/* <Spiner /> */}
			{show}
		</div>

	)
}

export default Contacts;