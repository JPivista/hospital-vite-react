
const AboutUs = () => {
    return (
        <div>
            <div className="relative w-full h-[70vh] overflow-hidden">
                <img
                    src="/about/about-us-banner.jpg"
                    alt="about us banner"
                    className="fixed top-0 left-0 w-full h-[70vh] object-cover -z-50"
                />
                <div className="fixed inset-0 bg-black bg-opacity-70 h-[70vh] -z-50 flex items-center justify-center text-white text-center">
                    <div>
                        <h1 className="lg:text-6xl text-3xl font-bold">
                            About Us
                        </h1>

                    </div>
                </div>
            </div>


            <div className="h-[50vh] flex flex-col justify-center items-center bg-[#DFEDFF]">
                <p className="lg:text-6xl text-4xl font-semibold text-rblue">
                    In Progress . . .
                </p>
            </div>
        </div>
    )
}

export default AboutUs
