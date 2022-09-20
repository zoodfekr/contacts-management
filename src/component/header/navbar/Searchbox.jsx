
const Search = () => {
	return (
		<form class="d-flex p-1 col-12 col-lg-4 text-center " role="search" dir="ltr" style={{ display: 'hidden' }}>
			<div className="input-group">
				<input class="form-control border border-danger" type="search" dir="rtl" placeholder="Search" aria-label="Search" placeholder="جستجوی مخاطب"></input>

				<button class="btn btn-outline-danger border border-danger " type="submit">
					<i class="fa-solid fa-magnifying-glass"></i>
				</button>
			</div>
		</form>
	);
}

export default Search;