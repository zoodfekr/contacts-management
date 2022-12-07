
import { Link, Navigate, useNavigate } from "react-router-dom";
import Spiner from './Preloader';
import { getallgroup, getcontact, putcontact } from "../services/contactservices";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { toast } from 'react-toastify';
import { useFormik, Form, Field, Formik, ErrorMessage } from 'formik';
import { contactSchema } from "../validation/validation";


const Editor = ({ groups }) => {

	const params = useParams(); //params.cid > 10
	const navigate = useNavigate();

	const [egroup, setegroup] = useState();
	const [contact, setcontact] = useState()

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

	const updateform = (value) => {
		// event.preventDefault();
		putcontact(parseInt(params.cid), value);
		toast.success("مخاطب ویرایش شد")
		navigate("/")
	}

	if (contact) {


		console.log("econtact", contact);



		return (

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


								<Formik

									initialValues={contact}
									validationSchema={contactSchema}
									onSubmit={(values) => { updateform(values) }}
								>
									<Form className="bg-light p-4" style={{ borderRadius: "25px" }}>

										<div className="mb-2">

											<Field name="fullname" type="text" className='form-control' placeholder="نام و نام خانوادگی" />
											<ErrorMessage name="fullname" render={(msg) => (<div className="text-danger">{msg}</div>)} />

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
									</Form>


								</Formik>




								</div>
							</div>
						</div>


					</section>
				</>




		);
	}



};

export default Editor;