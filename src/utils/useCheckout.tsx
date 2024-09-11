import React, { createContext, useContext, useState } from "react";


const CheckoutContext = createContext<any>(undefined)
export const CheckoutProvider=({children}:{children:React.ReactNode})=>{
    const [shippingInfo, setShippingInfo] = useState({
        first_name: '',
        last_name:'',
        email :'',
        phone:'',
        address:'',
        notes:'',
        country:'',
    state:'',
    city:'',
    postal:''
      })

    return(
        <CheckoutContext.Provider value={{shippingInfo, setShippingInfo}}>
{children}
        </CheckoutContext.Provider>
    )
}

export const useCheckout = ()=>useContext(CheckoutContext)