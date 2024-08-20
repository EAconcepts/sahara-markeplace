'use client'

import { Header } from "@/app/dashboard/(components)/header"
import Form1 from "./(components)/forrm1"
import Form2 from "./(components)/form2"
import { Button } from "@/components/ui/button"
import { useState, FormEvent, ChangeEvent } from "react"
import { useAuth } from "@/utils/useAuth"
import { useMutation } from "@tanstack/react-query"
import axios from "axios"
import { toast } from "sonner"

const AddProduct=()=>{
    const [prdtDetails, setPrdtDetails] = useState<any>({
        name: '',
        price: '',
        image: '',
        quantity: 1,
        description: '',
        category :''
    })

    const {token} = useAuth()
    const headers = {
        Authorization: `Bearer ${token}`
      }
    //   console.log(token)
      const baseUrl = process.env.NEXT_PUBLIC_API_URL

    // Add a product
    const handlePublish=(e:FormEvent<HTMLFormElement> )=>{
        e.preventDefault()
        console.log(prdtDetails)
        productMutation.mutate()
    }

    // On input value change
    const handleChange=(e:ChangeEvent<HTMLInputElement>)=>{
        const {name, value} = e.target
       setPrdtDetails && setPrdtDetails((prevVals:any)=>({...prevVals, [name]:value}))
      }
 

  const productMutation= useMutation({
    mutationFn: ()=>axios.post(`${baseUrl}/vendor/add-product`,prdtDetails, {headers}),
    onSuccess:((data)=>{
      console.log(data)
      toast.success("product added successfully!")
    }),
    onError:((error)=>{
      console.log(error)
      toast.error("Error adding product!")
    })

  })
    return(
        <div className="w-full font-openSans">
            {/* Breadcrumb */}
            <div></div>
            <div className="w-full mt-[12px] gap-y-[32px] py-[16px]">
                <Header title="Add Product"/>
                <form onSubmit={handlePublish} className="flex flex-col gap-y-[32px]  ">
                <div className="w-full flex gap-x-[16px] border-border border-b-[1px] pb-[32px]">
                    <div className="w-full">
                        <Form1 setPrdtDetails={setPrdtDetails} handleChange={handleChange} prdtDetails={prdtDetails}/>
                    </div>
                    <div className="w-full">
                    <Form2 setPrdtDetails={setPrdtDetails} handleChange={handleChange} prdtDetails={prdtDetails}/>
                    </div>
                </div>
                <Button type={'submit'} className=" self-center w-fit bg-greenPrimary text-[16px] px-[24px] py-[12px] text-center font-[600] text-white leading-[23.2px]">Publish</Button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct