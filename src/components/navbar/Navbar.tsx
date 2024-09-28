

function Navbar() {
  return (
    <div className='flex justify-center'>
      <div className='w-full md:h-[130px] md:w-[1000px] bg-[#19a99d] shadow-2xl rounded-b-3xl p-2 text-center'>
        <div className='flex justify-center h-[50px] md:h-[70px] mt-2'>
            <img src="./logo/shantanu-logo-removebg.png" alt="" />
        </div>
        <div className='flex justify-center'>
            <p className='text-[#EEE5E9] text-sm md:text-2xl font-semibold'>The Most Profitable FUNNEL Strategy For Online Coaches & Mental Health Consultants</p>
        </div>
      </div>
    </div> 
  )
}

export default Navbar
