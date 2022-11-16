import { useState } from "react";
import { useSearchParams, useLocation, useParams } from 'react-router-dom';
import test, { tester } from "./contacts";

import Appcontext from '../context/Appcontext';

const Search = ({ query, finder }) => {


	return (
		<form class="d-flex p-1 col-12 col-lg-4 text-center " role="search" dir="ltr" style={{ display: 'hidden' }}>
			<div className="input-group">
				<input class="form-control border border-danger" type="search" dir="rtl"
					placeholder="Search" aria-label="Search" placeholder="جستجوی مخاطب ...."
					onChange={finder}
				></input>
			</div>
		</form>
	);
}

export default Search;