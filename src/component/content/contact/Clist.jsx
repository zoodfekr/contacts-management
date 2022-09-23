// import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { clearc } from '../../../data';
import { getcontact, getallgroup, getgroup, deletecontact } from "../../../services/contactservices";
import Contacts from "./contacts";


const Clist = (props) => {

	const params = useParams();
	const navigate = useNavigate();

	const [contact, setcontact] = useState(null);
	const [group, setgroup] = useState(null);

	useEffect(() => {
		getcontact(params.cid).then(r => setcontact(r.data)).catch(e => alert('خطا'));

	}, [params]);

	const clear = () => {
		deletecontact(parseInt(contact.id));
		navigate("/list")
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
				<p>  مخاطب شماره {params.cid}</p>
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