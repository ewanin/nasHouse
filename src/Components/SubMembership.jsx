import React from 'react'

const SubMembership = () => {
    return (
        <div className='bg-2b372e'>
            <div className=" 2xl:py-[4.5rem] py-[2.5rem] gap-x-[25px] gap-y-[25px] md:flex block  justify-center md:pl-0 pl-[10vw]">
                <div>
                    <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e6fad6a8404f01cd1adc9e_home-membership-img-1.jpg" alt="Not Available"
                        className=' rounded-r-0 md:rounded-l-[2.625rem] object-cover md:mb-0 mb-[15px] xl:w-[25vw] md:w-[30vw] w-[80vw] align-middle inline-block'
                    />
                </div>
                <div>
                    <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e6fad7b1712f0340b635d2_home-membership-img-2.jpg" alt="Not Available"
                        className=' rounded-0 object-cover md:mb-0 mb-[15px] xl:w-[25vw] md:w-[30vw] w-[80vw] align-middle inline-block'
                    />
                </div>
                <div>
                    <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e6fad63eeb1d3eabc83a95_home-membership-img-3.jpg" alt="Not Available"
                        className=' rounded-l-0 md:rounded-r-[2.625rem] object-cover md:mb-0 mb-[15px] xl:w-[25vw] md:w-[30vw] w-[80vw] align-middle inline-block'
                    />
                </div>
            </div>
            <div className=' 2xl:w-[1300px] xl:w-[1090px] w-[90vw] md:flex block justify-center items-center pb-[50px] mx-auto'>
                <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e6e4207d7d0fffa46b925f_cards-img.png" alt="Not Available" 
                    className=' flex-1 object-cover lg:max-w-full md:max-w-[50vw] max-w-full  align-middle inline-block'
                />
                <div className='relative'>
                    <div className=" text-fff7e2 mb-[1.2rem] 2xl:text-[50px] xl:text-[40px] lg:text-[35px] text-[29px] leading-[133%] font-montbold capitalize">
                        <span className="2xl:text-[35px] xl:text-[27px] lg:text-[24px] text-[21px] font-[400] block">An exclusive community</span>limited to 150 people
                    </div>
                    <a href="" className=' backdrop-blur-[9.5px] bg-5e8b19 rounded-full 2xl:py-[32px] md:py-[22px] py-[15px] 2xl:px-[52px] md:px-[42px] px-[30px] no-underline max-w-full inline-block'>
                        <div className='font-[600] leading-[1] 2xl:text-[28px] xl:text-[17px] lg:text-[16px] text-[15px] text-[#ffff] font-montreg'>
                            Join now
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default SubMembership
