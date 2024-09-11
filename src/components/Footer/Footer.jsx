import WhatsAppButton from "../../utils/WhatsAppButton"
import Chatbox from "../../utils/Chatbox"
import { NavLink } from "react-router-dom"

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
                            <h2 className="text-lg font-semibold">Company Name</h2>
                            <p className="mt-2 text-gray-400">A short description of your company.</p>
                        </div>

                        <div className="w-full md:w-1/3 mb-6 md:mb-0">
                            <h2 className="text-lg font-semibold">Quick Links</h2>
                            <ul className=' flex flex-col items-start mt-2'>
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

                        <div className="w-full md:w-1/3">
                            <h2 className="text-lg font-semibold">Contact Us</h2>
                            <p className="mt-2 text-gray-400">1234 Street Name, City, State, 56789</p>
                            <p className="mt-2 text-gray-400">Email: info@example.com</p>
                            <p className="mt-2 text-gray-400">Phone: (123) 456-7890</p>
                        </div>
                    </div>

                    <div className="mt-8 border-t border-gray-700 pt-6 text-center text-gray-400">
                        &copy; {currentYear} Company Name. All rights reserved.
                    </div>
                </div>
            </footer>

            <div>
                <Chatbox />
                <WhatsAppButton />
            </div>
        </>
    )
}

export default Footer
