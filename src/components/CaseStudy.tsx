

function CaseStudy() {
  return (
    <div className='bg-[#19a99d] w-full h-[400px] flex items-center justify-center'>
        <div className='w-[80%] h-[80%] bg-[#eefffe] rounded-3xl shadow-2xl border-[1px]'>
            <div className="">
                
                <h1 className="text-xl md:text-4xl text-center font-bold text-[#19a99d] py-7 underline px-8 md:px-44 font-philosopher">CASE STUDY: THE MARKETING STRATEGY</h1>
                <p className="sm:text-xl text-sm text-center text-[#19a99d] sm:py-4 sm:px-20 px-3 font-">Discover how Connect with Shantanu has helped businesses achieve their goals with innovative solutions. Download our case study to see real examples of our successful projects and results</p>
                <div className="h-[60px] w-auto mt-6 flex justify-center items-center">
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#19a99d] via-[#19a99d] to-[#19a99d] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <a
                                href="./pdf/case-study.pdf"
                                download
                                target='blank'
                                title="Get quote now"
                                className="relative inline-flex items-center justify-center px-4 py-3 md:px-8 md:py-4 font-philosopher text-sm md:text-lg font-bold text-[#eefffe] transition-all duration-200 bg-[#19a99d] font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 "
                                role="button">
                                DOWNLOAD: CASE STUDY
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6 ml-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                            </a>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
  )
}

export default CaseStudy