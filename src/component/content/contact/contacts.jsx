import Contact from './contact';
import Spiner from '../Preloader';
import { getallcontact, getallgroup, deletecontact } from '../../../services/contactservices';
import { useEffect, useState } from 'react';
import { confirmAlert } from 'react-confirm-alert';

const Contacts = () => {
	const [preloader, setpreloader] = useState(false);
	const [getgroup, setgroup] = useState([]);
	const [contacts, setcontacts] = useState([]);

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


	const clear = (event) => {
		// confirmAlert({
		// 	title: ` حذف ${event.fullname}`,
		// 	message: 'آیا مطمعن هستید؟',
		// 	buttons: [
		// 		{
		// 			label: 'بله',
		// 			onClick: () => {
		// 				remover();
		// 			}
		// 		},
		// 		{
		// 			label: 'خیر',
		// 			onClick: () => true
		// 		}
		// 	]
		// });


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
									// this.handleClickDelete();
									remover();
									onClose();
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



	const remover = async () => {
		try {
			setpreloader(true);
			const box = await deletecontact(parseInt(contacts[0].id));
			if (box.status == 200) {
				let { data: contactdata } = await getallcontact();
				setcontacts(contactdata);
				setpreloader(false);
			}

		} catch (err) {
			console.log(err.message);
		}
	}


	const conts = contacts.length > 0 ? contacts.map((c) => (
		< Contact key={c.id} contacts={c} clear={clear} />
	)) :

		(
			<div className=' text-center py-2  rounded'>
				<img src={require('../../../assets/no-found.gif')} alt="notfound" className='w-50' />
				<p className='' style={{ fontSize: '25px' }}>مخاطب یافت نشد...</p>
			</div>
		);


	return (

		<div className="container p-0 d-flex flex-row flex-wrap justify-content-evenly  border-success" dir="rtl" style={{ boxSizing: "border-box" }}>

			{preloader ? <Spiner /> : (conts)}

		</div>



	)
}

export default Contacts;