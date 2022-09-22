import axios from "axios";
let list = [
	{
		name: "رضا",
		number: 1,
		family: "زارعی",
		age: 21,
	},


];

export const getlist = () => {
	return list;
};



const server_url='http://localhost:9000';

export const getallcontact = ()=>{
	const url=`${server_url}/contacts`;
	return axios.get(url);
	}

export const getc = (number) => {
	return list.find((c) => c.number === number);

};


export const clearc = (x) => {
	list = list.filter((w) => w.number !== x)

};
