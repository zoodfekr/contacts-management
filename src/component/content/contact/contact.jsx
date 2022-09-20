const Contact = ({ contacts }) => {
	console.log(" درییافت دیتا در کارد ها", contacts);
	return (
		<div className="col-12 col-lg-6 ">
			<div className="card my-2 ">
				<div className="card-body  px-2">
					<div className="  align-items-center d-flex justify-content-around px-2">

						<div className="col-3 col-sm-4 ">
							{contacts.photo ?
								<img src={contacts.photo} alt={contacts.fullname} className="img-fluid rounded" /> :
								<img src="https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg" alt={contacts.fullname} className="img-fluid rounded" />}
						</div>

						<div className="col-md-7 col-sm-4   py-0 px-0 ">

							<ul className="list-group px-1">
								<li className="list-group-item list-group-item-dark">
									مخاطب شماره:{"  "}
									<span className="fw-bold">{contacts.id}</span>
								</li>
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
							<button className="btn my-1 btn btn-success" >
								<i className="fa fa-eye" />
							</button>

							<button className="btn my-1 btn btn-warning" >
								<i className="fa fa-pen" />
							</button>
							<button className="btn my-1 btn btn-danger" >
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