import CountUp from 'react-countup';
import ReactPlayer from "react-player"
import AboutNypunya from './AboutNypunya';
import Services from './Services';


const Home = () => {
    return (
        <>
            <div className="relative w-full h-[90vh] overflow-hidden">
                <ReactPlayer
                    url="https://www.youtube.com/embed/tMTJFsxtF7g?autoplay=1&loop=1&playlist=tMTJFsxtF7g&modestbranding=1&controls=0&rel=0&showinfo=0&vq=hd1080"
                    // url="https://www.youtube.com/embed/D0UnqGm_miA?autoplay=1&loop=1&playlist=D0UnqGm_miA&modestbranding=1&controls=0&rel=0&showinfo=0"
                    playing={true}
                    loop={true}
                    muted={true}
                    controls={false}
                    width="100%"
                    height="100%"
                    className="absolute top-0 left-0 lg:block hidden"
                />
                <ReactPlayer
                    // url="https://www.youtube.com/embed/tMTJFsxtF7g?autoplay=1&loop=1&playlist=tMTJFsxtF7g&modestbranding=1&controls=0&rel=0&showinfo=0&vq=hd1080"
                    url="https://www.youtube.com/embed/K835pE6oQYg?autoplay=1&loop=1&playlist=K835pE6oQYg&modestbranding=1&controls=0&rel=0&showinfo=0&vq=hd1080"
                    playing={true}
                    loop={true}
                    muted={true}
                    controls={false}
                    width="100%"
                    height="100vh"
                    className="absolute top-0 left-0 block lg:hidden"
                />
                <div className="absolute inset-0 flex items-center justify-center z-10 text-white text-center">
                    <div>
                        {/* Uncomment the following lines if you want to add overlay text */}
                        {/* <h1 className="text-4xl font-bold">Your Banner Title</h1>
                    <p className="text-xl mt-4">Your banner subtitle or description goes here.</p> */}
                    </div>
                </div>
            </div>

            <div className="flex justify-center items-center bg-dblue p-4 backdrop-blur-lg">
                <div className="container-xl py-10 px-5 relative bg-blue-700/75 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg">
                    <div className="lg:grid lg:grid-cols-2 lg:gap-4 flex flex-col gap-10">
                        <div className='flex flex-col justify-center' data-aos="fade-right">
                            <h2 className="text-4xl font-bold text-white">
                                Medical Achivement
                                Health Protection
                            </h2>
                        </div>
                        <div className="grid grid-cols-2 lg:gap-4 gap-10 ">
                            <div className='lg:gap-2 gap-6 flex flex-col' data-aos="fade-up">
                                <CountUp
                                    start={0}
                                    end={1000}
                                    duration={2.75}
                                    suffix=" +"
                                    className='lg:text-4xl text-3xl font-bold text-white'
                                />
                                <hr className='lg:w-[60%] border' />
                                <p className='text-xl text-bold text-white'>
                                    Satisfied Patients
                                </p>
                            </div>
                            <div className='lg:gap-2 gap-6 flex flex-col' data-aos="fade-down">
                                <CountUp
                                    start={0}
                                    end={100}
                                    duration={2.75}
                                    suffix="%"
                                    className='lg:text-4xl text-3xl font-bold text-white'
                                />
                                <hr className='lg:w-[60%] border' />
                                <p className='text-xl text-bold text-white'>
                                    Satisfaction Rates
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="flex justify-center lg:p-0 p-4 b bg-[#DFEDFF]">
                <div className="container lg:py-28">
                    <div className='lg:grid lg:grid-cols-3 gap-5 flex flex-col'>
                        <div className="flex flex-col items-center gap-8 p-4">
                            {/* Combined Hover Effect */}
                            <div className='border-2 border-white p-10 rounded-xl flex flex-col gap-6 backdrop-blur-sm bg-white/10 shadow-lg transition-transform transition-colors duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-500 hover:text-white hover:border-blue-500'
                                data-aos="fade-down">
                                <div>
                                    <p className='text-2xl font-semibold '>
                                        Our Professionals
                                    </p>
                                </div>
                                <hr className='w-full border border-white' />
                                <div className='flex flex-col items-center justify-center gap-8'>
                                    <img className='transition-transform duration-300 hover:scale-105' src='/our-doctors.png' alt='our-doctors' />
                                    <p className='font-semibold flex items-center'>
                                        <span className='text-2xl font-bold pr-2'>180+ </span> Doctors
                                    </p>
                                    <p className='text-center'>
                                        Rapidiously reinvent long-term impact collaboration
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-8 p-4">
                            {/* Combined Hover Effect */}
                            <div className='border-2 border-white p-10 rounded-xl flex flex-col gap-6 backdrop-blur-sm bg-white/10 shadow-lg transition-transform transition-colors duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-500 hover:text-white hover:border-blue-500'
                                data-aos="fade-up" data-aos-duration="5000" data-aos-easing="ease-out-cubic"
                            >
                                <div>
                                    <p className='text-2xl font-semibold '>
                                        Appoinments
                                    </p>
                                </div>
                                <hr className='w-full border border-white' />
                                <div className='flex flex-col items-center justify-center gap-8'>
                                    <a href='tel:98765 43210'>
                                        <img className='transition-transform duration-300 hover:scale-105' src='/call.png' alt='our-doctors' />
                                    </a>

                                    <p className='font-semibold flex items-center'>
                                        <a href='tel:98765 43210'>
                                            <span className='text-2xl font-bold pr-2'>+91 98765 43210 </span>
                                        </a>
                                    </p>
                                    <p className='text-center'>
                                        <a href='tel:98765 43210'>Call Us </a> for Booking appoinments online 24 hrs available
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center gap-8 p-4">
                            {/* Combined Hover Effect */}
                            <div className='border-2 border-white p-10 rounded-xl flex flex-col gap-6 backdrop-blur-sm bg-white/10 shadow-lg transition-transform transition-colors duration-300 hover:scale-105 hover:shadow-2xl hover:bg-blue-500 hover:text-white hover:border-blue-500'
                                data-aos="fade-down">
                                <div>
                                    <p className='text-2xl font-semibold '>
                                        Locations
                                    </p>
                                </div>
                                <hr className='w-full border border-white' />
                                <div className='flex flex-col items-center justify-center gap-8'>
                                    <a href='https://maps.app.goo.gl/cT6JXVKPpKmnQdkX6' target='_blank'>
                                        <img className='transition-transform duration-300 hover:scale-105' src='/location.png' alt='our-doctors' />
                                    </a>
                                    <p className='font-semibold flex items-center'>
                                        <a href='https://maps.app.goo.gl/cT6JXVKPpKmnQdkX6' target='_blank'>
                                            <span className='text-2xl font-bold pr-2'> Our Location </span>
                                        </a>
                                    </p>
                                    <p className='text-center'>
                                        Rapidiously reinvent long-term impact collaboration
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <AboutNypunya />

            <Services />



        </>
    )
}

export default Home
