import React from 'react'

const About = () => {
    return (
        <div className=' bg-f4ebdc bg-about bg-[0px] xl:py-[150px] md:py-[100px] py-[80px] overflow-hidden relative z-0'>
            <div className="py-[0px] px-[2.5rem]">
                <div className='2xl:w-[1600px] xl:w-[1032px] lg:w-[800px] md:w-[700px] w-[90vw] gap-[6.52625rem] md:flex block justify-between items-center mx-auto'>
                    <div className=" relative">
                        <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e5763f8aeed86e7dcb8a24_up-what-is-nas-hous-.jpg" alt="Not Available" 
                            className='2xl:w-[686px md:w-[486px] w-[80vw] rounded-[2.625rem] object-cover max-w-full align-middle inline-block'
                        />
                        <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e11503224acf6b4e2f4197_about-leaf-img-spread.png" alt="Not Available" 
                            className='xl:w-[113px] ld:w-[90px] w-[70px] h-auto object-contain absolute xl:-top-[14px] -top-[7px] bottom-auto left-auto xl:-right-[44px] md:-right-[20px] -ml-[50px] max-w-full align-middle inline-block'
                        />
                        <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e11502e6e4b322d59d69cd_about-leaf-img.png" alt="Not Available" 
                            className=' object-cover max-w-full align-middle inline-block z-10 2xl:w-[200px] xl:w-[176px] lg:w-[150px] w-[130px] h-auto absolute top-auto -bottom-[0.5rem] lg:-left-[64px] -left-[50px] right-auto'
                        />
                    </div>
                    <div className=' z-[10] 2xl:w-[764px] xl:w-[464px] lg:w-[564px] md:w-[564px] w-[80vw] md:mt-0 mt-[15px] relative'>
                        <h2 className='color-[#000000] md:mb-[25px] mb-[15px] 2xl:text-[60px] xl:text-[40px] lg:text-[35px] md:text-[30px] text-[25px] leading-[90%] mt-0 font-[700] font-montbold'>What is Nas House?</h2>
                        <p className=' max-w-[50ch] 2xl:text-[28px] xl:text-[17px] lg:text-[16px] text-[15px] leading-[150%] font-montreg'>Nas House is a space for ambitious people to gather. It is designed perfectly to help people make connections and build communities. A place where you can sleep, work, eat, network, host and attend events, all in one location. It's where people feel they belong.</p>
                    </div>
                </div>
            </div>
            <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e24c2f8feadf7d6e7bce9c_about-leaf-img.png" alt="Not Available" 
                className=' 2xl:w-[450px] xl:w-[368px] lg:w-[300px] md:w-[250px] w-[200px] absolute top-auto bottom-[1rem] left-auto right-0 object-cover max-w-full align-middle inline-block'
            />
        </div>
    )
}

export default About;