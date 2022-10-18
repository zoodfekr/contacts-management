
import { Link, Navigate, useNavigate } from "react-router-dom";
import Spiner from './Preloader';
import { getallgroup, getcontact, putcontact } from "../services/contactservices";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';

const Editor = ({ groups }) => {

	const params = useParams(); //params.cid > 10
	const navigate = useNavigate();

	const [egroup, setegroup] = useState();
	const [contact, setcontact] = useState({
		fullname: "",
		photo: "",
		mobile: "",
		email: "",
		job: "",
		group: ""
	})

	useEffect(() => {
		const recever = async () => {
			try {
				let { data: cdata } = await getcontact(parseInt(params.cid)) //10
				let { data: gdata } = await getallgroup();
				setcontact(cdata);
				setegroup(gdata);

			} catch {
				console.log("مشکلی پیش آمده");
			}
		}
		recever();

	}, []);

	const setcontactinfo = (event) => {
		setcontact({ ...contact, [event.target.name]: event.target.value });
	}

	const updateform = (event) => {
		event.preventDefault();
		putcontact(parseInt(params.cid), contact);
		toast.success("مخاطب ویرایش شد")
		navigate("/")
	}

	if (contact) {


		console.log("econtact", contact);



		return (
			<>
				(

				<>

					<section className="p-3 ">

						{/* عکس زمینه  */}
						<img src={require("../assets/man-taking-note.png")} height="400px" style={{
							position: "absolute",
							zIndex: "-1",
							top: "130px",
							left: "100px",
							opacity: "50%",
						}} />

						<div className="container ">

							{/*نوشته ویرایش مخاطب */}
							<div className="row ">
								<div className="col">
									<p className="h4 fw-bold text-center " style={{ color: "black" }}>
										ویرایش مخاطب									</p>
								</div>
							</div>



							<hr style={{ backgroundColor: "green" }} className='border' />

							<div className="row mt-5  p-3" style={{
								backgroundColor: "purple", borderRadius: "25px",
								opacity: "0.7"
							}}>

								<div className="col-md-4 ">

									<form onSubmit={updateform}>

										<div className="mb-2">
											<input
												name="fullname"
												type="text"
												className="form-control"
												value={contact.fullname}
												onChange={setcontactinfo}
												required={true}
												placeholder="نام و نام خانوادگی"
											/>
										</div>


										<div className="mb-2">
											<input
												name="photo"
												type="text"
												value={contact.photo}
												onChange={setcontactinfo}
												className="form-control"
												// required={true}
												placeholder="آدرس تصویر"
											/>
										</div>
										<div className="mb-2">
											<input
												name="mobile"
												type="number"
												value={contact.mobile}
												onChange={setcontactinfo}
												className="form-control"
												required={true}
												placeholder="شماره موبایل"
											/>
										</div>
										<div className="mb-2">
											<input
												type="email"
												name="email"
												value={contact.email}
												onChange={setcontactinfo}
												className="form-control"
												required={true}
												placeholder="آدرس ایمیل"
											/>
										</div>
										<div className="mb-2">
											<input
												type="text"
												name="job"
												value={contact.job}
												onChange={setcontactinfo}
												className="form-control"
												required={true}
												placeholder="شغل"
											/>
										</div>
										<div className="mb-2">
											<select
												name="group"
												value={contact.group}
												onChange={setcontactinfo}
												required={true}
												className="form-control"

											>
												{/* <option selected key={1} value={1} >انتخاب گروه</option> */}

												{groups.length > 0 && groups.map((group) => (

													<option key={group.id} value={group.id}> {group.name} </option>

												))}
											</select>
										</div>
										<div className="mx-2" className=" d-flex " style={{
											justifyContent: "space-around"
										}}>

											<input type="submit"
												className="btn"
												value="ویرایش مخاطب"
												className="btn btn-primary"
											/>

											<Link to={"/"}
												className="btn mx-2"
												className="btn btn-danger"
											>
												انصراف
											</Link>

										</div>
									</form>
								</div>
							</div>
						</div>


					</section>
				</>

				)
				}
			</>
		);
	}



};

export default Editor;