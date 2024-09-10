import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';

const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'AboutUs', route: '/about-us' },
    { name: 'Services', route: '/services' },
    { name: 'OurTeam', route: '/our-team' },
    { name: 'ContactUs', route: '/contact-us' },
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };


    }, []);

    const getLinkClass = ({ isActive }) =>
        isActive ? 'text-[#8448a0] font-bold [text-shadow:_0_4px_8px_rgba(144_165_223_/_0.2)]' : '';

    return (
        <div className={`fixed z-50 top-0 left-0 w-full transition-colors duration-300 ${isScrolled ? 'bg-white text-[#1c2e4a] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' : 'bg-transparent text-white'}`}>
            <div className='lg:w-[95%] mx-auto sm:px-6 lg:px-6'>
                <div className='flex items-center justify-between p-0'>
                    {/* Logo */}
                    <div className={`flex-shrink-0 cursor-pointer pl-7 px-4 py-4 flex items-center `}>
                        <div>
                            {/* <h1 className='text-24px inline-flex gap-3 items-center text-[#B5D44C] font-bold'>
                                YourBlogs
                            </h1> */}
                            <p className='font-bold text-[13px] text-[#B5D44C] tracking-[8px]'>
                                Quick Explore
                            </p>

                            {/* <img src='/logo.png' alt='logo' className="lg:w-[200px] w-[100px]" /> */}
                        </div>
                    </div>

                    {/* Mobile Menu Icon */}
                    <div className='md:hidden flex items-center shadow-sm'>
                        <button
                            type='button'
                            onClick={toggleMenu}
                            className='text-gray-300 hover:text-black focus:outline-none fixed top-6 right-6'
                        >
                            <FaBars className='h-6 w-6' />
                        </button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className={`hidden md:block px-10 py-4 `}>
                        <div className='flex'>
                            <ul className=' flex items-center space-x-6'>
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
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden absolute top-full left-0 w-full bg-white z-50 ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className='flex flex-col items-center space-y-4 py-4 fixed bg-white'>
                        {navLinks.map((link) => (
                            <NavLink
                                to={link.route}
                                key={link.route}
                                className={getLinkClass}
                                onClick={toggleMenu} // Close menu on link click
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
