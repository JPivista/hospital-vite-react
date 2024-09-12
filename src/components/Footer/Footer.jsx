import WhatsAppButton from "../../utils/WhatsAppButton";
import Chatbox from "../../utils/Chatbox";
import { NavLink } from "react-router-dom";
import { Envelope, Phone, GeoAlt, Facebook, Instagram, Youtube } from 'react-bootstrap-icons'; // Import icons

const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'AboutUs', route: '/about-us' },
    { name: 'Services', route: '/services' },
    { name: 'OurTeam', route: '/our-team' },
    { name: 'ContactUs', route: '/contact-us' },
];

const getLinkClass = ({ isActive }) =>
    isActive ? 'text-[#8448a0] font-bold ' : 'text-gray-400';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year dynamically

    return (
        <>
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-between">

                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-lg font-semibold">Follow us on Social Media</h2>
                            {/* Social Media Icons */}
                            <div className="mt-4 flex space-x-4">
                                <a href="https://www.facebook.com/NypunyaAC/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <Facebook size={24} />
                                </a>
                                <a href="https://www.instagram.com/nypunya_aesthetic_clinic_/?igshid=1hj1j7deqfexh" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <Instagram size={24} />
                                </a>
                                <a href="https://www.youtube.com/channel/UCES_6H91r0LfLwSI7jDcWrQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                                    <Youtube size={28} />
                                </a>
                            </div>
                        </div>

                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-lg font-semibold">Quick Links</h2>
                            <ul className='flex flex-col items-start mt-2'>
                                {navLinks.map((link) => (
                                    <li key={link.route}>
                                        <NavLink
                                            to={link.route}
                                            className={getLinkClass}
                                            style={{ whiteSpace: 'nowrap' }}
                                        >
                                            {link.name}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="w-full md:w-1/3 flex flex-col gap-2">
                            <h2 className="text-lg font-semibold">Contact Us</h2>
                            <div className="mt-2 text-gray-400 flex items-center">
                                <GeoAlt className="mr-4 text-[28px] ]" /> {/* Address icon */}
                                <p>#3,1st Cross Off 24th Main, 2nd Phase, J. P. Nagar, Bengaluru</p>
                            </div>
                            <div className="mt-2 text-gray-400 flex items-center">
                                <Envelope className="mr-4 text-[25px] ]" /> {/* Email icon */}
                                <a href="mailto: clinic.nypunyaaesthetic@gmail.com" target="_blank">
                                    Email: clinic.nypunyaaesthetic@gmail.com
                                </a>
                            </div>
                            <div className="mt-2 text-gray-400 flex items-center">
                                <Phone className="mr-4 text-[28px] ]" /> {/* Phone icon */}
                                <a href="tel:9876543210" target="_blank">
                                    Phone: (123) 456-7890
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
                        &copy; {currentYear} Company Name. All rights reserved.
                    </div>
                </div>
            </footer >

            <div>
                <Chatbox />
                <WhatsAppButton />
            </div>
        </>
    )
}

export default Footer;
