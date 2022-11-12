import { useEffect } from "react";
import { useState } from "react";

const useFetch = (url) => {
	let [data, setData] = useState(null);
	useEffect(() => {
		fetch(url).then((res) => res.json()).then((data) => setData(data));
	}, [url]);
	return [data];
};

const Accordion = () => {
	let [status, setstatus] = useState(false);

	let [data] = useFetch('https://jsonplaceholder.ir/users');

	return (
		<div className="container border d-flex flex-column justify-content-center">
			<h3 className="align-self-center p-2" style={{ fontFamily: "Vazirmatn" }}>نمایش اطلاعات مسافرین</h3>
			<div className="d-flex justify-content-center">
				<button className="btn btn-primary m-2" onClick={() => setstatus(prevloading => !prevloading)}>نمایش</button>
			</div>

			{status ? data.map((user, index) => (
				<div key={index} className="border m-1 bg-light d-flex">
					<ol >
						{/* <li><img src={user.avatar} alt="آواتار" /></li> */}
						<li >{`نام و نشان : ${user.name} `}</li>
						<li>{`username: ${user.username} `}</li>
						<li>{`ایمیل: ${user.email} `}</li>
						<li>{`شماره موبایل: ${user.phone} `}</li>
						<li><a href={user.website}>{`وب سایت: ${user.website}`}</a></li>
						<li>{`شرکت: ${user.company} `}</li>
						<li>{`ادرس: ${user.address.country}- ${user.address.city}-${user.address.street}-${user.address.alley} `}</li>

					</ol>
				</div>
			)) : null}

		</div>
	)

};
export default Accordion;


