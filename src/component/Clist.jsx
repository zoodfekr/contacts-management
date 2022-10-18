// import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect } from "react";
import { useState } from "react";
import { toast } from 'react-toastify';
import { useParams, useNavigate } from "react-router-dom";

import { getcontact, getallgroup, getgroup, deletecontact } from "../services/contactservices";
import Contacts from "./contacts";


const Clist = (props) => {

	const params = useParams();
	const navigate = useNavigate();

	const [contact, setcontact] = useState(null);


	useEffect(() => {
		// getcontact(params.cid).then(() => setcontact(data));

		const fetchData = async () => {
			try {
				let { data: contactdata } = await getcontact(params.cid);
				setcontact(contactdata);
			} catch (err) {
				console.log(err.message)
			}
		};

		fetchData();

	}, [params]);

	const clear = async () => {
		try {
			const box = await deletecontact(parseInt(params.cid));
			if (box.status == 200) {
				toast.success("مخاطب حذف شد")
				navigate("/list");
			} else {
				toast.error("مشکلی پیش آمده")

			}
		} catch (err) {
			console.log(err.message);
		}
	}




	const style = {
		backgroundColor: "#B2BABB",
		borderRadius: "50px"
	}


	if (contact) {

		let first;

		const runner = () => { first = props.groupsData.map(c => c).filter(c => c.id == parseInt(contact.group)) }
		runner();


		return (

			<div className="container">
				<div className="p-5 m-2  Sticky-top border" style={style} >
					<p> آیدی مخاطب: {params.cid}  </p>
					<p>نام: {contact.fullname}</p>
					<p>موبایل: {contact.mobile}</p>
					<p>شغل: {contact.job}</p>
					<p>ایمیل: {contact.email}</p>
					<p>گروه: {first[0].name}</p>

					<button className="btn btn-danger" onClick={clear} >حذف مخاطب</button>

				</div >
			</div>
		)
	} else {

		return (
			<div className="p-5 m-2 " style={{
				borderRadius: '25px',
				backgroundColor: '#a2d2ff'
			}}>
				<p> مخاطب وجود ندارد</p>

			</div >
		)
	}










}
export default Clist;