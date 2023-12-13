import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'

export const  bookDateResponseContext = createContext()
export const editBookResponseContext = createContext()


function ContextShare({children}) {
    const [bookdateResponse,setBookdateResponse]= useState({})
    const  [editBookResponse,seteditBookResponse]= useState({})

  return (
    <>
        <bookDateResponseContext.Provider value={{bookdateResponse,setBookdateResponse}}> 
            <editBookResponseContext.Provider value={{editBookResponse,seteditBookResponse}}>
              {children} 
            </editBookResponseContext.Provider>
        </bookDateResponseContext.Provider>
    </>
  )
}

export default ContextShare