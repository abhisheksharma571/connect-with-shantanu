import React from 'react'

function Team() {
    return (
        <>
            <div className='mt-4' >

                <h1 className=' md:text-5xl  text-[#08528e] text-center font-philosopher font-black text-2xl '>Our Team</h1>


            </div>
            <div className="flex mt-6 mb-3 items-center justify-center bg-backgound ">
                <div className=" flex  justify-center gap-5  ">

                    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./images/team1.jpeg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <b>Meenal Rakhunde</b><hr className='border-none' />(Web Developer)<br /></p>
                            <div>
                                <a href="https://www.linkedin.com/in/meenal-rakhunde-284035155/" target='_blank' >  <img className='h-6' src="./images/linkedin.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./images/ayushi.JPG" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"><b>Ayushi Vanwari</b><br />(Client Coordinator)</p>
                            <div>
                                <a href="https://www.linkedin.com/in/ayushi-vanwari-61439b22b/  " target='_blank' >   <img className='h-6' src="./images/linkedin.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-96 w-72 ">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="./images/umooba.jpeg" alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">

                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> <b>Urooba Anwar</b> <br /> (Content Strategy Analyst)<br /> </p>
                            <div>
                                <a href="https://www.linkedin.com/in/urooba-anwar-b938632b6/" target='_blank' >  <img className='h-6' src="./images/linkedin.png" alt="" /></a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>

    )
}

export default Team