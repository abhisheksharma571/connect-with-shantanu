import WordPullUp from "../../components/magicui/word-pull-up";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer() {
  return (
    <div className='h-[200px] w-full bg-[#1ea297] flex justify-center items-center gap-5'>
      <div className='flex flex-col justify-center items-center'>
        <WordPullUp
          className="text-2xl font-bold tracking-[-0.02em] font-philosopher text-[#ffffff] md:text-4xl md:leading-[5rem]"
          words="Connect with Shantanu"
        />
        <div className='flex gap-6 sm:mt-0 mt-2'>
          <a href="https://www.facebook.com/Datacracksolutions?mibextid=qi2Omg&rdid=ODd6bwd08uUzrY12&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fi4dBAwVuQaHCujKM%2F%3Fmibextid%3Dqi2Omg" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="text-[#ffffff] text-2xl rounded-full hover:text-blue-500" />
          </a>
          <a href="https://www.linkedin.com/company/analyticsbyshantanu/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="text-[#ffffff] text-2xl rounded-full hover:text-blue-700" />
          </a>
          <a href="https://www.instagram.com/analyticsbyshantanu?igsh=MTd4azFyeXE4N3I1MA%3D%3D" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="text-[#ffffff] text-2xl rounded-full hover:text-pink-500" />
          </a>
        </div>
      </div>
    </div>
    
  )
}

export default Footer