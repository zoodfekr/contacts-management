import axios from "axios";
let list = [
	{
		name: "رضا",
		number: 1,
		family: "زارعی",
		age: 21,
	},
	{
		name: "احمد",
		number: 2,
		family: "مرادی",
		age: 50,
	},
	{
		name: "ملیکا",
		number: 3,
		family: "محمدی",
		age: 43,
	},
	{
		name: "نگین",
		number: 4,
		family: "عباسی",
		age: 8,
	},
	{
		name: "امیر",
		number: 5,
		family: "مومنی",
		age: 20,
	},
	{
		name: "خشایار",
		number: 6,
		family: "زارعی",
		age: 21,
	},
	{
		name: "نبی",
		number: 7,
		family: "توحیدی",
		age: 50,
	},
	{
		name: "محمد",
		number: 8,
		family: "پاشایی",
		age: 43,
	},
	{
		name: "رامین",
		number: 9,
		family: "زودفکر",
		age: 8,
	},
	{
		name: "زهرا",
		number: 10,
		family: "امیری",
		age: 20,
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
