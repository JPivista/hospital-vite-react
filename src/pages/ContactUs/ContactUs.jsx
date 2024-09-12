
const ContactUs = () => {
    return (
        <>
            <div>
                <div className="relative w-full h-[70vh] overflow-hidden">
                    <img
                        src="/contact-us-banner.jpg"
                        alt="about us banner"
                        className="absolute top-0 left-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-10 text-white text-center">
                        <div>
                            <h1 className="lg:text-6xl text-3xl font-bold">
                                Contact Us
                            </h1>
                        </div>
                    </div>
                </div>



                <div className="h-[50vh] flex flex-col justify-center items-center">
                    <p className="lg:text-6xl text-4xl font-semibold text-rblue">
                        In Progress . . .
                    </p>
                </div>
            </div>
        </>
    )
}

export default ContactUs
