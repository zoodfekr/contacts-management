
import { Link } from "react-router-dom";
import Spiner from './Preloader';
import React, { useEffect, useRef } from "react";
// import { COMMENT, GREEN, PURPLE } from "../../helpers/colors";
import Appcontext from "../context/Appcontext";
import { useFormik, Form, Field, Formik, ErrorMessage } from 'formik';
import { contactSchema } from "../validation/validation";

const Addcontact = ({ loading, contact, groups, setcontactinfo, createContactForm }) => {

	// const { error } = React.useContext(Appcontext);

	// const firstinput = useRef();

	// useEffect(() => {
	// 	const fetchData = () => {
	// 		firstinput.current.focus();
	// 		firstinput.current.className = " form-control"
	// 		console.log(firstinput);
	// 	};
	// 	fetchData();
	// }, []);



	return (
		<>
			{loading ? (<Spiner />) : (

				<>

					<section className="p-3 ">

						<img src={require("../assets/man-taking-note.png")} height="400px" style={{
							position: "absolute",
							zIndex: "-1",
							top: "130px",
							left: "100px",
							opacity: "50%",
						}}
						/>

						<div className="container ">

							{/* تیتر ساخت مخاطب جدید */}
							<div className="row ">
								<div className="col">
									<p className="h4 fw-bold text-center " style={{ color: "black" }}>
										ساخت مخاطب جدید
									</p>
								</div>
							</div>

							<hr style={{ backgroundColor: "green" }} className='border' />

							{/* فرم */}
							<div className="row mt-5 ">
								<div className="col-md-4 ">

									<Formik initialValues={{ fullname: "", photo: "", mobile: "", email: "", job: "", group: "" }}
										validationSchema={contactSchema} onSubmit={(values) => { setcontactinfo(values) }}
									>
										<Form className="bg-light p-4" style={{ borderRadius: "25px" }}>

											<div className="mb-2">

												<Field name="fullname"
													type="text"
													className='form-control'
													placeholder="نام و نام خانوادگی"
												/>

												<ErrorMessage name="fullname"
													render={(msg) => (<div className="text-danger">{msg}</div>)} />

											</div>

											<div className="mb-2">
												<Field
													name="photo"
													type="text"
													className="form-control"
													placeholder="آدرس تصویر"
												/>
												<ErrorMessage name="photo" render={(msg) => (<div className="text-danger">{msg}</div>)} />

											</div>

											<div className="mb-2">
												<Field
													name="mobile"
													type="number"
													className="form-control"
													placeholder="شماره موبایل"
												/>
												<ErrorMessage name="mobile" render={(msg) => (<div className="text-danger">{msg}</div>)} />

											</div>
											<div className="mb-2">
												<Field
													type="email"
													name="email"
													className="form-control"
													placeholder="آدرس ایمیل"
												/>
												<ErrorMessage name="email" render={(msg) => (<div className="text-danger">{msg}</div>)} />

											</div>
											<div className="mb-2">

												<Field
													type="text"
													name="job"
													className="form-control"
													placeholder="شغل"
												/>
												<ErrorMessage name="job" render={(msg) => (<div className="text-danger">{msg}</div>)} />

											</div>
											<div className="mb-2">
												<Field
													name="group"
													as="select"
													className="form-control"
												>
													<option selected key={1} value="" >انتخاب گروه</option>
													{groups.length > 0 && groups.map((group) => (
														<option key={group.id} value={group.id}> {group.name} </option>
													))}

												</Field>
												<ErrorMessage name="group" render={(msg) => (<div className="text-danger">{msg}</div>)} />

											</div>

											<div className="mx-2" className=" d-flex " style={{
												justifyContent: "space-around"
											}}>

												<input type="submit"
													className="btn"

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
										</Form>


									</Formik>

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
