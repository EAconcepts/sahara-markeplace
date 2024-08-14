import { Welcome } from "@/app/(components)/Welcome"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const AdminSignin=()=>{

    return(
        <div className="w-full font-openSans">
            <div className='flex flex-col pt-[24px] items-center w-full'>
                <form className="w-[804px] flex flex-col gap-[32px] px-[96px] rounded-[8px] p-[40px]">
                    <div className="flex flex-col items-center gap-y-[8px]">
                        <h4 className="text-[24px] font-[600] leading-[28.8px] tracking-[-2%] text-blackPrimary">Sign In</h4>
                        <p className="text-[#787C83] leading-[20.3px] text-[14px] text-center font-[400]">Login into your account</p>
                    </div>
                    {/* Inputs */}
                    <div className="flex flex-col gap-y-[40px]">
                        <div className="flex flex-col gap-y-[24px]">
                            {/* Email */}
                            <div className="flex flex-col gap-y-[4px]">
                                <label className="font-[600] text-[14px] leading-[20.3px] text-[#787C83]">Admin Email Address</label>
                                <Input type="email" placeholder="email" className="rounded-[6px] border-[1px] p-[16px] h-[56px] w-full font-[400] text-[14px] leading-[20.3px] text-[#8E97A6]" />
                            </div>
                            {/* Password */}
                            <div className="flex flex-col gap-y-[4px]">
                                <label className="font-[600] text-[14px] leading-[20.3px] text-[#787C83]">Password</label>
                                <Input type="password" placeholder="password" className="rounded-[6px] border-[1px] p-[16px] h-[56px] w-full font-[400] text-[14px] leading-[20.3px] text-[#8E97A6]" />
                            </div>
                        </div>
                        {/* Forgot password */}
                        <div className="flex justify-between items-center">
                            <div className="flex gap-x-[8px]">
                                <Input type="checkbox" className="size-[24px] border-[1.5px] border-[#E4E7EC]"/>
                                <span className="font-[400] text-[14px] leading-[20.3px] text-blackPrimary">Keep me logged in</span>
                            </div>
                            <button className="text-[14px] font-[600] leading-[20.3px] text-greenPrimary pr-[12px]">Forgot Password?</button>
                        </div>
                        <Button className="bg-greenPrimary h-[55px] rounded-[12px] py-[16px] text-[16px] font-[600] text-center leading-[23.2px]">Login</Button>
                    </div>
                </form>
            </div>
            <Welcome/>
        </div>
    )
}

export default AdminSignin