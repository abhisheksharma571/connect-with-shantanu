import HeroVideoDialog from "../../components/magicui/hero-video-dialog";
import { BorderBeam } from '../magicui/border-beam'

const Callsection = () => {
    return (
        <div className=' ' >
           <div  className='justify-center flex ' >
           <div >
                <h1 className='sm:text-4xl text-2xl px-3 font-philosopher font-bold  text-center text-[#19a99d] py-7 ' >Unlock Your Past, Reclaim Your Strength and Embrace Emotional Freedom</h1>
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
                <div className='h-[440px] lg:h-[430px] w-full lg:w-[550px] pt-6 lg:pt-3 rounded-lg relative text-white mt-4 bg-[#19a99d] md:m-3 shadow-sm '>
                    <BorderBeam />
                    <div className='justify-center flex'>
                        <img className='h-[35px] lg:h-[45px]' src="./images/live.png" alt="live image" />
                    </div>
                    <div className='flex justify-center'>
                        <div className='text-center'>
                            <h1 className='font-bold font-philosopher text-lg lg:text-2xl w-full lg:w-[400px] pt-2'>
                                What to expect in 30 Mins Call
                            </h1>
                            <div className='h-[2px] w-full lg:w-[360px] mt-3 ml-auto mr-auto bg-white'></div>
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
                                    <img className='h-[22px] mt-3 md:mt-0 md:h-[30px] w-auto object-contain pl-2' src="./images/checkmark.png" alt="check mark" />
                                </div>
                                <div>
                                    <h1 className='pt-[2px] font-sans text-start font-medium'>{text}</h1>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Call to Action Button */}
                    <div className="h-[60px] w-auto mt-6 flex justify-center items-center">
                        <div className="relative inline-flex group">
                            <div
                                className="absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#ffffff] via-[#ffffff] to-[#ffffff] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt">
                            </div>
                            <a
                                href="https://calendly.com/infohub-gx2h/30min"
                                target='blank'
                                title="Get quote now"
                                className="relative inline-flex items-center justify-center font-philosopher px-4 py-3 md:px-8 md:py-4 text-base md:text-lg font-bold text-[#19a99d] transition-all duration-200 bg-white font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                role="button">
                                BOOK STRATEGY CALL
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Callsection;