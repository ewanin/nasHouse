import React from 'react'

const Villas = () => {
  return (
    <div className=" md:min-h-[100vh] bg-e2d9ca">
      <div className="md:h-[100vh] md:py-0 pt-10 pb-4 justify-center items-center flex">
        <div className='relative'>
          <div className=' lg:w-[70vw] w-[90vw] rounded-[2.625rem] flex-col justify-end flex relative overflow-hidden'>
            <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65e56e268320185196992129_u-villa-img-1-sky.jpg" alt="Not Available"
              className=' lg:w-[70vw] w-[90vw] object-cover max-w-ful align-middle inline-block'
            />
            <div className='bottom-[56%] w-full justify-center items-center flex absolute 2xl:top-[30%] md:top-[40%] top-[72%] left-auto right-0 text-center text-white'>
              <div className=''>
                <div className=' md:mb-[200px] mb-[190px] 2xl:text-[160px] xl:text-[120px] md:text-[90px] text-[40px] font-[900] leading-[79%] uppercase'>6 Villas</div>
                <div className=" text-center font-[400] relative -top-[190px] 2xl:text-[70px] xl:text-[50px] md:text-[40px] text-[18px] leading-[100%] uppercase">in the Heart of Dubai</div>
              </div>
            </div>
            <img src="https://assets-global.website-files.com/65d1c4de9de45e3e9c38283b/65ec12d448973ba62535ec98_NH-MainPic%2003-p-1600.png" alt="Not Available"
              className=' absolute top-0 bottom-auto left-0 right-0 object-cover lg:w-[70vw] w-[90vw] align-middle inline-block'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Villas;
