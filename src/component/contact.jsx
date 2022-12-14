import { deletecontact, getallcontact, getallgroup } from "../services/contactservices";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import Appcontext from '../context/Appcontext';

const Contact = ({ contacts, clear }) => {

	const user = React.useContext(Appcontext)

	return (
		<div className="col-12 col-lg-6   px-2">
			<div className="card my-2 " style={{ borderRadius: "50px", overflow: "hidden" }}>
				<div className="card-body  px-2 ">
					<div className="  align-items-center d-flex justify-content-around px-2" >

						<div className="col-3 col-sm-4 border d-flex" style={{ maxHeight: "140px", overflow: "hidden", alignItems: "center", borderRadius: "25px" }}>
							{contacts.photo ?
								<img src={contacts.photo} alt={contacts.fullname} className="img-fluid rounded" /> :
								<img src={require('../assets/male.jpg')} alt={contacts.fullname} className="img-fluid rounded" />}
						</div>

						<div className="col-md-7 col-sm-4   py-0 px-0 ">

							<ul className="list-group px-1 ">

								<li className="list-group-item list-group-item-dark">
									نام و نام خانوداگی :{"  "}
									<span className="fw-bold">{contacts.fullname}</span>
								</li>

								<li className="list-group-item list-group-item-dark">
									شماره موبایل :{"  "}
									<span className="fw-bold">{contacts.mobile}</span>
								</li>

								<li className="list-group-item list-group-item-dark">
									آدرس ایمیل :{"  "}
									<span className="fw-bold">{contacts.email}</span>
								</li>
							</ul>

						</div>

						<div className="col-md-1 col-sm-1 d-flex flex-column align-items-center ">

							<Link to={`/${contacts.id}`} style={{ borderRadius: "30px" }} className=" btn my-1 btn btn-success d-flex align-items-center" title="نمایش مخاطب">
								<i className="fa fa-eye" />
							</Link>

							<Link to={`/editor/${contacts.id}`} style={{ borderRadius: "30px" }} className="btn my-1 btn btn-warning d-flex align-items-center" title="ویرایش مخاطب">
								<i className="fa fa-pen" />
							</Link>

							<button className="btn my-1 btn btn-danger d-flex align-items-center" style={{ borderRadius: "30px" }} onClick={() => clear(contacts)} title="حذف مخاطب" >
								<i className="fa fa-trash" />
							</button>
						</div>

					</div>
				</div>
			</div>
		</div>

	)


}

export default Contact;