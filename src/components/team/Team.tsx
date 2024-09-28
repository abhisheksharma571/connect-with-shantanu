

function Team() {
    return (
        <>
            <div className="mt-4">
                <h1 className="text-4xl font-bold  text-center text-[#19a99d] py-7 underline"> Our Team</h1>
            </div>

            <div className="flex mt-6 mb-3 items-center justify-center bg-backgound">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 justify-center p-4">

                    {/* Team Member 1 */}
                    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-72 sm:h-96 w-full sm:w-72">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110" src="./images/team1.jpeg" alt="Meenal Rakhunde" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <b>Meenal Rakhunde</b>
                                <br />(Web Developer)
                            </p>
                            <a href="https://www.linkedin.com/in/meenal-rakhunde-284035155/" target="_blank" rel="noopener noreferrer">
                                <img className="h-6" src="./images/linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className=" h-72 sm:h-96 w-full sm:w-72">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110" src="./images/ayushi.JPG" alt="Ayushi Vanwari" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <b>Ayushi Vanwari</b>
                                <br />(Client Coordinator)
                            </p>
                            <a href="https://www.linkedin.com/in/ayushi-vanwari-61439b22b/" target="_blank" rel="noopener noreferrer">
                                <img className="h-6" src="./images/linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="group relative rounded-xl cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-72 sm:h-96  w-full sm:w-72">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110" src="./images/umooba.jpeg" alt="Urooba Anwar" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <b>Urooba Anwar</b>
                                <br />(Content Strategy Analyst)
                            </p>
                            <a href="https://www.linkedin.com/in/urooba-anwar-b938632b6/" target="_blank" rel="noopener noreferrer">
                                <img className="h-6" src="./images/linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Team;