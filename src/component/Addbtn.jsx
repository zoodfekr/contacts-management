import { Link, Outlet } from 'react-router-dom'
const Addbtn = () => {

	const style = {
		minWidth: "180px",
	}

	return (
		<div className=" border-danger py-2  d-flex container  d-flex justify-content-center">
			<div className="  d-flex justify-content-center align-items-center  mt-3 flex-wrap">
				<Link style={style} to='./add' className='btn btn-primary mx-1 rounded m-1'><i class="fa-solid fa-user-plus mx-2"></i>افزودن مخاطبین</Link>
				<Link style={style} to='./about' className='btn btn-primary mx-1 rounded m-1'>درباره برنامه</Link>
				<Link style={style} to='./list' className='btn btn-primary mx-1 rounded m-1'>لیست</Link>
				<Link style={style} to='./' className='btn btn-primary mx-1 rounded m-1'>صفحه اصلی</Link>
				{/* <Link style={style} to='/Capabilities' className='btn btn-warning mx-1 rounded m-1'>قابلیت های برنامه</Link> */}
			</div>
		</div>
	)
}

export default Addbtn;