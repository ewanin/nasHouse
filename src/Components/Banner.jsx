import React from 'react'

const Banner = () => {
    return (
        <div>
            <div className='text-center flex flex-col justify-center items-center h-[100vh] font-montbold'>
                <h1 className=' z-30 max-w-[15ch] relative 2xl:xl:text-[99px] xl:text-[77px] lg:text-[55px] md:text-[50px] text-[35px] font-bold leading-[90%] text-white mb-[6%]'>Where Ambitious People Gather.</h1>
                <a href="" className=' bg-lightGreen font-[600] 2xl:px-[70px] xl:px-[42px] lg:px-[35px] px-[30px] 2xl:py-[35px] xl:py-[23px] lg:py-[20px] py-[16px] 2xl:text-[24px] md:text-[16px] text-[13px] rounded-full max-w-full inline-block cursor-pointer text-white'>Enquire Now</a>
            </div>
            <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e718575026285f88307eb5_home-header-top-left.png" alt="Not Available"
                className=' z-20 xl:w-[580px] lg:w-[412px] md:w-[307px] absolute top-auto bottom-0 left-0 right-auto md:visible invisible'
            />
            <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e718571127e7c8481b422c_home-header-middle-left.png" alt="Not Available"
                className=' z-10 xl:w-[676px] lg:w-[531px] md:w-[400px] absolute top-auto bottom-0 left-0 right-auto md:visible invisible'
            />
            <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e7185716a5db17d34c32ab_home-header-top-right.png" alt="Not Available"
                className=' z-20 xl:w-[580px] lg:w-[412px] md:w-[307px] absolute top-auto bottom-0 left-auto right-0 md:visible invisible'
            />
            <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e718574ab521ef7ad0fa07_home-header-middle-right.png" alt="Not Available"
                className=' z-10 xl:w-[676px] lg:w-[531px] md:w-[400px] absolute top-auto bottom-0 left-auto right-0 md:visible invisible'
            />
            <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e0e67a53a17268acc2297e_home-header-img-item-1.jpg" alt="Not Available"
                className=' -z-10 w-full h-full absolute top-0 bottom-auto left-0 right-0 object-cover max-w-full align-middle inline-block'
            />
        </div>
    )
}

export default Banner
