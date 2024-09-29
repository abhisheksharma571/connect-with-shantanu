

const StickyButton = () => {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <div className="relative inline-flex group">
                {/* Gradient background with hover effect */}
                <div className="absolute transition-all duration-1000 opacity-80 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-full blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                {/* Button content */}
                <a
                    href="https://calendly.com/infohub-gx2h/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center justify-center px-6 py-4 text-lg font-bold text-white bg-[#19a99d] rounded-full shadow-lg transition-all duration-200 group-hover:bg-white group-hover:text-black"
                >
                    BOOK STRATEGY CALL
                </a>
            </div>
        </div>
    );
};

export default StickyButton;
