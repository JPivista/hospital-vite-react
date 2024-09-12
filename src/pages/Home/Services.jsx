import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css'; // Import the CSS for the carousel

const services = [
    { name: 'Breast Enhancement', route: '/services/plastic-surgery/breast-enhancement', image: '/servicee/srvce.png' },
    { name: 'Body Contouring & Abdomino Plasty', route: '/services/plastic-surgery/body-contouring', image: '/servicee/srvce2.png' },
    { name: 'Hair Transplant', route: '/services/plastic-surgery/hair-transplant', image: '/servicee/srvce3.png' },
    { name: 'Rhinoplasty', route: '/services/plastic-surgery/rhinoplasty', image: '/servicee/srvce4.png' },
    { name: 'Anti-Ageing', route: '/services/plastic-surgery/anti-ageing', image: '/servicee/srvce.png' },
    { name: 'Acne and Acne Scars', route: '/services/dermatology/acne-and-scars', image: '/servicee/srvce2.png' },
    { name: 'Laser Hair Removal', route: '/services/dermatology/laser-hair-removal', image: '/servicee/srvce3.png' },
    { name: 'Fillers and Botox', route: '/services/dermatology/fillers-and-botox', image: '/servicee/srvce4.png' },
    { name: 'Pigmentation Dark Circle', route: '/services/dermatology/pigmentation-dark-circle', image: '/servicee/srvce.png' }
];

const Services = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <>
            <style>
                {`
                    .custom-gradient {
                        background-image: linear-gradient(0deg, rgba(0, 37, 111, 1) 0%, rgba(0, 37, 111, 0.8) 20%, rgba(0, 37, 111, 0) 50%, rgba(0, 37, 111, 0) 100%);
                        position: absolute;
                        top: 0;
                        right: 0;
                        left: 0;
                        bottom: 0;
                        z-index: 10;
                        transition: opacity 0.3s ease;
                        opacity: 0.7;
                    }

                    .carousel-item:hover .custom-gradient {
                        opacity: 0;
                    }

                    .hover-gradient {
                        background-image: linear-gradient(0deg, rgba(0, 125, 255, 1) 0%, rgba(0, 125, 255, 1) 20%, rgba(0, 125, 255, 0) 50%, rgba(0, 125, 255, 0) 100%);
                        position: absolute;
                        top: 0;
                        right: 0;
                        left: 0;
                        bottom: 0;
                        z-index: 20;
                        transition: opacity 0.3s ease;
                        opacity: 0;
                    }

                    .carousel-item:hover .hover-gradient {
                        opacity: 1;
                    }

                    .item-content {
                        position: absolute;
                        bottom: 0;
                        left: 0;
                        right: 0;
                        padding: 16px;
                        text-align: center;
                        color: white;
                        z-index: 30;
                    }
                `}
            </style>
            <div className="flex justify-center lg:p-0 p-4 bg-darkblue">
                <div className="container-xl lg:py-20 flex flex-col gap-8">
                    <div className="lg:grid lg:grid-cols-3 gap-8 items-center flex flex-col">
                        <p className='lg:text-6xl text-4xl text-bold text-white' data-aos="flip-right">
                            PROVIDES
                            BEST SERVICE
                        </p>

                        <p className="text-[#97a9bf] text-[18px]" data-aos="fade-up">
                            Enthusiastically orchestrate competitive e-services whereas superior Conveniently disintermediate innovative solutions through impactfuls tailers without seamless markets network.
                        </p>

                        <div className="mediic-btn cursor-scale small flex flex-col lg:items-center lg:justify-center">
                            <Link to="/services" data-aos="fade-right">
                                <p className="font-semibold">
                                    View All Services
                                </p>
                            </Link>
                        </div>
                    </div>
                    <hr className="w-full" />

                    <Carousel responsive={responsive} className="relative">
                        {services.map(link => (
                            <div
                                key={link.route}
                                className="relative overflow-hidden rounded-lg mx-4 my-4 shadow-sm shadow-white carousel-item"
                                style={{
                                    backgroundImage: `url(${link.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    height: '350px', // Adjust height as needed
                                }}
                                data-aos="flip-left"
                            >
                                <div className="custom-gradient"></div>
                                <Link to={link.route}>
                                    <div className="item-content">
                                        <p className="text-lg font-semibold" data-aos="fade-up">{link.name}</p>
                                    </div>
                                </Link>
                                <div className="hover-gradient"></div>
                            </div>
                        ))}
                    </Carousel>
                </div>
            </div>
        </>
    );
};

export default Services;
