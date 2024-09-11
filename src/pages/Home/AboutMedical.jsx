import CountUp from 'react-countup';
const AboutMedical = () => {
    return (
        <>
            <div className="flex justify-center lg:p-0 p-4  bg-[#DFEDFF]">
                <div className="container-xl lg:pt-20 pt-10 flex flex-col gap-4">
                    <div className="lg:grid lg:grid-cols-2 flex flex-col gap-5">
                        <div>
                            <p className="lg:text-6xl font-bold text-3xl text-rblue">
                                About Medical
                            </p>
                        </div>
                        <div className="flex flex-row lg:justify-end items-center">
                            <CountUp
                                start={0}
                                end={10}
                                duration={2.75}
                                suffix="+"
                                className='lg:text-6xl text-4xl text-bold text-rblue'
                            />
                            <p className='text-rblue text-lg font-semibold pl-5 '>
                                YEARS OF <br /> EXPERIENCE
                            </p>
                        </div>
                    </div>
                    <hr className='w-full border-1 border-gray-300 ' />
                    <div className="lg:grid lg:grid-cols-12 flex flex-col gap-5 mt-6">
                        <div className='col-span-7'>
                            <p className="lg:text-4xl font-bold text-2xl text-dblue">

                            </p>
                        </div>
                        <div className='flex flex-col gap-4 col-span-5'>
                            <p className="lg:text-2xl font-semibold text-rblue">
                            </p>
                            <p className="lg:text-xl font-light text-dblue">
                                What it takes to offer YOU the best Dermatology and Plastic Surgery Services?
                            </p>

                            <p>
                                Nypunya means ‘Expertise’ in Sanskrit. Our Doctors are Experts in the true sense. After training in the most prestigious medical institutes , gaining an immense wealth of clinical experience and earning many academic laurels. Our doctors have more than a decade of experience in clinical practice. Experience matters! They have performed a wide variety of aesthetic surgical and nonsurgical procedures and NYPUNYA boasts of thousands of happy and satisfied patients. They believe in constantly updating themselves with the latest techniques and cutting edge technologies and refining their skills.
                            </p>
                            <p>
                                Services and facilities at NYPUNYA are world class and comprehensive. The unique feature is the entire spectrum of Dermatology and plastic surgery services are provided under one roof. This makes NYPUNYA a one stop solution to fulfill all your aesthetic goals.
                                The best of Aesthetics, Dermatology and plastic surgery services to enhance the sense of well being and be the Best version of yourself!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutMedical
