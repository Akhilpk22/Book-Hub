// ALL API define in font end side 

import { BASE_URL } from "./baseurl"
import { commonAPI } from "./commonAPI"

// register APi call   not in reqHeader the go to "application/json" passs
export const registerAPI =async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/register`,user,"")
}
// login Api call 
export const loginAPI =async (user)=>{
    return await commonAPI("POST",`${BASE_URL}/user/login`,user,"")
}
// Add Api call for add book 
export const addBooksAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("POST",`${BASE_URL}/books/add`,reqBody,reqHeader)
}

// get all books in your projects
export const homeBookAPI= async()=>{
    return await commonAPI("GET",`${BASE_URL}/books/all`,"","")
}