import HeroVideoDialog from "../../components/magicui/hero-video-dialog";
import { BorderBeam } from '../magicui/border-beam';

const Callsection = () => {
    return (
        <div className=' ' >
           <div className='justify-center flex ' >
               <div >
                    <h1 className='text-4xl font-bold  text-center text-[#19a99d] py-7' >Unlock Your Past, Reclaim Your Strength and Embrace Emotional Freedom</h1>
                </div>
           </div>
            <div className='flex flex-col lg:flex-row justify-evenly w-full py-6 px-3 sm:px-0  bg-[#eefffe] '>
                {/* Video Section */}
                <div className='flex justify-center items-center '>
                <HeroVideoDialog
                    className=""
                    animationStyle="from-center"
                    videoSrc="./videos/intro.mp4"
                    thumbnailSrc="./images/poster.jpg"
                    thumbnailAlt="Hero Video"
                />
                </div>

                {/* Information Section */}
                <div className='h-[460px] lg:h-[460px] w-full lg:w-[550px] pt-6 lg:pt-3 rounded-lg relative text-white mt-4 bg-[#19a99d] md:m-3'>
                    <BorderBeam />
                    <div className='justify-center flex'>
                        <img className='h-[35px] lg:h-[45px]' src="./images/live.png" alt="live image" />
                    </div>
                    <div className='flex justify-center'>
                        <div className='text-center'>
                            <h1 className='font-bold text-lg lg:text-2xl w-full lg:w-[400px] pt-2'>
                                What to expect in 30 Mins Call
                            </h1>
                            <div className='h-[3px] w-full lg:w-[360px] mt-3 ml-auto mr-auto bg-green-400'></div>
                        </div>
                    </div>

                    {/* Bullet Points Section */}
                    <div className='pt-4'>
                        {[
                            'Your Current Situation Analysis and Roadmap to reach your Goal',
                            'How you can be 1 of the top 5 Coaches in your Industry',
                            'How to increase individual Online Presence and Generate Quality Leads'
                        ].map((text, idx) => (
                            <div key={idx} className='flex pl-2 pt-3 gap-[8px]'>
                                <div>
                                    <img className='h-[22px] mt-3 md:mt-0 md:h-[30px] w-auto object-contain' src="./images/checkmark.png" alt="check mark" />
                                </div>
                                <div>
                                    <h1 className='pt-[2px] text-start font-medium'>{text}</h1>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action Button */}
                    <div className="h-[60px] w-auto mt-6 flex justify-center items-center">
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <a
                                href="https://calendly.com/infohub-gx2h/30min"
                                target='blank'
                                title="Get quote now"
                                className="relative inline-flex items-center justify-center px-4 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-black transition-all duration-200 bg-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button">
                                BOOK STRATEGY CALL
                            </a>
                        </div>
                    </div>

                    {/* PDF Download Button */}
                    <div className="h-[ 60px]  w-auto mt-4 flex justify-center items-center">
                        <a 
                            href="./pdf/case-study.pdf"
                            download
                            className="relative inline-flex h-12 w-64 items-center justify-between px-4 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-white transition-all duration-200 bg-[#ff675e] rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                        >
                            {/* Text on the Left */}
                            <span className="mr-2 text-[12px] ">Download Case Study PDF</span>
                            {/* Download Icon on the Right */}
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Callsection;
