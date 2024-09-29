

function Team() {
    return (
        <>
            <div className="mt-4">
                <h1 className=" sm:text-4xl text-2xl font-philosopher font-bold  text-center text-[#19a99d] sm:py-7 underline"> Our Team</h1>
            </div>

            <div className="flex mt-6 mb-3 items-center justify-center bg-backgound">
                <div className="grid grid-cols-3 md:grid-cols-5 sm:gap-4 gap-2  justify-center p-4">

                    {/* Team Member 1 */}
                    <div className="group relative rounded-xl cursor-pointer items-center h-36 md:h-72 w-full md:w-56 justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-full w-full">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110" src="./images/team1.jpeg" alt="Meenal Rakhunde" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 sm:text-lg text-sm italic  text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <b>Meenal Rakhunde</b>
                                <br />(Web Developer)
                            </p>
                            <a href="https://www.linkedin.com/in/meenal-rakhunde-284035155/" target="_blank" rel="noopener noreferrer">
                                <img className="sm:h-6 h-3" src="./images/linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    {/* Team Member 2 */}
                    <div className="group relative rounded-xl cursor-pointer h-36 sm:h-72 w-full sm:w-56 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className=" h-full w-full ">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110" src="./images/ayushi.JPG" alt="Ayushi Vanwari" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-5 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 sm:text-lg text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <b>Ayushi Vanwari</b>
                                <br />(Client Coordinator)
                            </p>
                            <a href="https://www.linkedin.com/in/ayushi-vanwari-61439b22b/" target="_blank" rel="noopener noreferrer">
                                <img className="sm:h-6 h-3" src="./images/linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    {/* Team Member 3 */}
                    <div className="group relative rounded-xl cursor-pointer h-36 sm:h-72 w-full sm:w-56 items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="h-full w-full">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110" src="./images/umooba.jpeg" alt="Urooba Anwar" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 sm:text-lg text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <b>Urooba Anwar</b>
                                <br />(Content Strategy Analyst)
                            </p>
                            <a href="https://www.linkedin.com/in/urooba-anwar-b938632b6/" target="_blank" rel="noopener noreferrer">
                                <img className="sm:h-6 h-3" src="./images/linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    {/* Team Member 4 */}
                    <div className="group relative rounded-xl h-36 sm:h-72 w-full sm:w-56 cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className=" ">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110" src="./images/ayushi.JPG" alt="Ayushi Vanwari" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 sm:text-lg text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <b>Ayushi Vanwari</b>
                                <br />(Client Coordinator)
                            </p>
                            <a href="https://www.linkedin.com/in/ayushi-vanwari-61439b22b/" target="_blank" rel="noopener noreferrer">
                                <img className="sm:h-6 h-3" src="./images/linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>

                    {/* Team Member 5 */}
                    <div className="group relative rounded-xl h-36 sm:h-72 w-full sm:w-56 cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                        <div className="">
                            <img className="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-110" src="./images/umooba.jpeg" alt="Urooba Anwar" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                        <div className="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                            <p className="mb-3 sm:text-lg text-sm italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <b>Urooba Anwar</b>
                                <br />(Content Strategy Analyst)
                            </p>
                            <a href="https://www.linkedin.com/in/urooba-anwar-b938632b6/" target="_blank" rel="noopener noreferrer">
                                <img className="sm:h-6 h-3" src="./images/linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
}

export default Team;