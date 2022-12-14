
import { NavLink, Outlet, useSearchParams, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getallcontact, getallgroup } from '../services/contactservices';
import Clist from './Clist';
import Addbtn from './Addbtn'

const List = () => {

	let [SearchParams, setSearchParams] = useSearchParams();
	let location = useLocation();
	const [contact, setcontact] = useState([]);
	const [group, setgroup] = useState([]);
	const [getcontacts, setcontacts] = useState([]);
	const list = getcontacts;


	useEffect(() => {
		const fetchData = async () => {
			try {
				let { data } = await getallcontact();
				setcontacts(data);

			} catch (err) {

				console.log('مشکل دریافت دیتا');
			}
		};
		fetchData();
	}, [location]);


	const listFilter = data => {

		let filter = SearchParams.get("input");
		if (filter) {
			return (`${data.fullname}`).indexOf(filter) != -1
		} else {
			return true;
		}
	};

	const onsearch = event => {
		let input = event.target.value;
		if (input) {
			setSearchParams({ input });
		} else {
			setSearchParams({});
		}
	};





	const maplist = data => {


		const colorly = ({ isActive }) => {
			return {
				backgroundColor: isActive ? "green" : "",
				boxShadow: isActive ? "0px 0px 15px 5px green" : "",
			};
		};

		return (
			<NavLink to={`/list/${data.id}${location.search}`} key={data.number} className='d-flex btn btn-dark my-2 '
				style={({ isActive }) => {
					return {
						backgroundColor: isActive ? "green" : "",
						boxShadow: isActive ? "0px 0px 15px 5px green" : "",
					};
				}}>
				{`${data.fullname}`}
			</NavLink>
		);
	};

	return (
		<div className="container  d-flex flex-wrap p-0 my-5 ">

			<div style={{ borderLeft: "solid 2px red" }} className="col-sm-4 col-12 p-2">


				{/* ورودی سرچ */}
				<input type="text" placeholder='جستجوی مخاطب' className='form-control my-1 border border-danger'
					onChange={onsearch}
					style={{
						boxShadow: '0px 0px 15px red'
					}}
				>
				</input>

				{/* نمایش دهنده لیست */}
				{list.filter(listFilter).map(maplist)}

			</div>

			{/* نمایش دهنده اطلاعات */}
			<div className='col-12 col-sm-8  '>
				<Outlet />
			</div>

		</div>
	)
}

export default List;
