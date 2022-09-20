import Contact from './contact';
import Spiner from '../Preloader';
import { getallcontact } from '../../../data';
import { getallgroup } from '../../../services/contactservices';
import { useEffect, useState } from 'react';

const Contacts = () => {
	const [preloader, setpreloader] = useState(false);
	const [getgroup, setgroup] = useState([]);
	const [contacts, setcontacts] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {

				setpreloader(true);
				let { data: contactdata } = await getallcontact();
				let { data: groupsData } = await getallgroup ();

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

	const conts = contacts.length > 0 ? contacts.map((c) => (
		< Contact key={c.id} contacts={c} />
	)) :

		(
			<div className=' text-center py-2  rounded'>
				<img src={require('../../../assets/no-found.gif')} alt="notfound" className='w-50' />
				<p className='text-danger' style={{ fontSize: '25px' }}>مخاطب یافت نشد...</p>
			</div>
		);


	return (

		<div className="container p-0 d-flex flex-row flex-wrap justify-content-evenly  border-success" dir="rtl" style={{ boxSizing: "border-box" }}>

			{preloader ? <Spiner /> : (conts)}

		</div>



	)
}

export default Contacts;