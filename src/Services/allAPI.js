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
// user books 
export const userBookAPI = async(reqHeader)=>{
    return await commonAPI("GET",`${BASE_URL}/user/all-books`,"",reqHeader)
    
}

// update api call 
export const editbookAPI  = async(bookId ,reqBody,reqHeader)=>{
    // passss the url path parametter id  
    return await commonAPI("PUT",`${BASE_URL}/books/edit/${bookId}`,reqBody,reqHeader)
}

// delete API call in onlyuserbook
export const deleteAPI = async(bookId,reqHeader)=>{
    return await commonAPI("DELETE",`${BASE_URL}/books/remove/${bookId}`,{},reqHeader)
}
// update user information 
export const edituserAPI = async(reqBody,reqHeader)=>{
    return await commonAPI("PUT",`${BASE_URL}/user/edit`,reqBody,reqHeader)
}