
import { Link } from "react-router-dom";
import Spiner from './Preloader';
import { useEffect, useRef } from "react";
// import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";

const Addcontact = ({ loading, contact, groups, setcontactinfo, createContactForm }) => {


	const firstinput = useRef();

	useEffect(() => {
		const fetchData = () => {
			firstinput.current.focus();
			firstinput.current.className = " form-control"
			console.log(firstinput);
		};
		fetchData();
	}, []);


	return (
		<>
			{loading ? (<Spiner />) : (

				<>

					<section className="p-3 ">
						f
						<img src={require("../assets/man-taking-note.png")} height="400px" style={{
							position: "absolute",
							zIndex: "-1",
							top: "130px",
							left: "100px",
							opacity: "50%",
						}}
						/>

						<div className="container ">

							<div className="row ">
								<div className="col">
									<p className="h4 fw-bold text-center " style={{ color: "black" }}>
										ساخت مخاطب جدید
									</p>
								</div>
							</div>

							<hr style={{ backgroundColor: "green" }} className='border' />

							<div className="row mt-5 ">

								<div className="col-md-4 ">

									<form onSubmit={createContactForm}>

										<div className="mb-2">
											<input
												ref={firstinput}
												name="fullname"
												type="text" onChange={setcontactinfo}
												className='form-control'
												placeholder="نام و نام خانوادگی"
												required={true}
												value={contact.fullname}
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
												type="tel"
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
												<option selected key={1} value="" >انتخاب گروه</option>

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
												// style={{ backgroundColor: 'purple' }}
												value="ساخت مخاطب"
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
};

export default Addcontact;
