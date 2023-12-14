import React, { createContext, useEffect, useState } from 'react'

export const tokenVerifyContext= createContext()

function TokenVerify({children}) {

    const [isAuthorized,setisAuthorized]= useState(false)
    useEffect(()=>{
        if(sessionStorage.getItem("token")){
            setisAuthorized(true)
        }else{
            setisAuthorized(false)
        }
    
    },[isAuthorized])

  return (

    <>
       <tokenVerifyContext.Provider value={{isAuthorized,setisAuthorized}}> 
                {children}
       </tokenVerifyContext.Provider>
    </>
  )
}

export default TokenVerify