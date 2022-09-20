// import { clear } from "@testing-library/user-event/dist/clear";
import { useEffect } from "react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getc, clearc } from '../../../data';
import { getcontact } from "../../../services/contactservices";

const Clist = (props) => {
	const params = useParams();
	const [contact, setcontact] = useState(null);
	// const c = getc(parseInt(params.cid));
	const Navigate = useNavigate();

	useEffect(() => {
		getcontact(params.cid)
			.then(r => setcontact(r.data))
			.catch(e => alert('خطا'));
	}, [params]);
	// useEffect(() => {(async () => {
	// 	setcontact((await getcontact(params.cid)).data);
	// })()}, [params]);



	if (contact) {
		return (

			<div className="p-5 m-2  Sticky-top" >
				<p>  مخاطب شماره {params.cid}</p>
				<p>نام: {contact.fullname}</p>
				<p>موبایل: {contact.mobile}</p>
				<p>شغل: {contact.job}</p>
				<button className="btn btn-danger" >حذف مخاطب</button>
			</div >
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