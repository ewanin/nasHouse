import React from 'react'

const Pools = () => {
    return (
        <div className=" md:min-h-[100vh] bg-e2d9ca">
            <div className="md:h-[100vh] md:py-0 py-4 justify-center items-center flex">
                <div className='relative'>
                    <div className=' lg:w-[70vw] w-[90vw] rounded-[2.625rem] flex-col justify-end flex relative overflow-hidden'>
                        <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e6f071c15551f93b5bcbaa_villa-anim-img-2.jpg" alt="Not Available"
                            className=' lg:w-[70vw] w-[90vw] object-cover max-w-ful align-middle inline-block'
                        />
                        <div className='bottom-[56%] w-full justify-center items-center flex absolute 2xl:top-[60%] md:top-[60%] top-[90%] left-auto right-0 text-center text-white'>
                            <div className=''>
                                <div className=' md:mb-[200px] mb-[190px] 2xl:text-[160px] xl:text-[120px] md:text-[90px] text-[40px] font-[900] leading-[79%] uppercase max-w-[9ch]'>5 Private Pools</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pools;
