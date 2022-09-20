import axios from "axios";
const server_url = 'http://localhost:9000';

//get all contact *
export const getallcontact = ()=>{
const url=`${server_url}/contacts`;
return axios.get(url);
}

//get all group *
export const getallgroup = () =>{
    const url=`${server_url}/groups`;
    return axios.get(url);
}

//get contact
export const getcontact =(contactid)=>{
    const url=`${server_url}/contacts/${contactid}`;
    return axios.get(url);
}

//update contact
export const putcontact=(contactid,contact)=>{
    const url=`${server_url}/contacts/:${contactid}`;
    return axios.put(url,contact);
}

//add contact
export const postcontact=(contact)=>{
    const url=`${server_url}/contacts`;
    return axios.post(url,contact);
}

//delete contacts
export const deletecontact = (contactid) =>{
    const url=`${server_url}/contacts/contactid`;
    return axios.delete(url);
}
