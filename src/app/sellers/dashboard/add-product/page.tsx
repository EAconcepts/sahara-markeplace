import { Header } from "@/app/dashboard/(components)/header"
import Form1 from "./(components)/forrm1"
import Form2 from "./(components)/form2"
import { Button } from "@/components/ui/button"

const AddProduct=()=>{

    return(
        <div className="w-full font-openSans">
            {/* Breadcrumb */}
            <div></div>
            <div className="w-full mt-[12px] gap-y-[32px] py-[16px]">
                <Header title="Add Product"/>
                <form className="flex flex-col gap-y-[32px]  ">
                <div className="w-full flex gap-x-[16px] border-border border-b-[1px] pb-[32px]">
                    <div className="w-full">
                        <Form1/>
                    </div>
                    <div className="w-full">
                    <Form2/>
                    </div>
                </div>
                <Button className=" self-center w-fit bg-greenPrimary text-[16px] px-[24px] py-[12px] text-center font-[600] text-white leading-[23.2px]">Publish</Button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct