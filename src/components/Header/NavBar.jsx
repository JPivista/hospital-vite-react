import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaChevronDown, FaArrowRight } from 'react-icons/fa'; // Import FaArrowRight for the Book button

const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'About Us', route: '/about-us' },
    {
        name: 'Services',
        route: '/services',
        subLinks: [
            {
                category: 'Plastic Surgery',
                links: [
                    { name: 'Breast Enhancement', route: '/services/plastic-surgery/breast-enhancement' },
                    { name: 'Body Contouring & Abdomino Plasty', route: '/services/plastic-surgery/body-contouring' },
                    { name: 'Hair Transplant', route: '/services/plastic-surgery/hair-transplant' },
                    { name: 'Rhinoplasty', route: '/services/plastic-surgery/rhinoplasty' },
                    { name: 'Anti-Ageing', route: '/services/plastic-surgery/anti-ageing' }
                ]
            },
            {
                category: 'Dermatology',
                links: [
                    { name: 'Acne and Acne Scars', route: '/services/dermatology/acne-and-scars' },
                    { name: 'Laser Hair Removal', route: '/services/dermatology/laser-hair-removal' },
                    { name: 'Fillers and Botox', route: '/services/dermatology/fillers-and-botox' },
                    { name: 'Pigmentation Dark Circle', route: '/services/dermatology/pigmentation-dark-circle' }
                ]
            }
        ]
    },
    { name: 'Our Team', route: '/our-team' },
    { name: 'Contact Us', route: '/contact-us' },
    { name: 'Book an Appointment', route: '/book-appointment' }
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(null);
    const [hoverService, setHoverService] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const toggleSubMenu = (category) => {
        setOpenSubMenu(prevCategory => prevCategory === category ? null : category);
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

        isActive ? 'text-rblue font-bold [text-shadow:_0_4px_8px_rgba(144_165_223_/_0.2)] border-b border-black' : 'text-black';
    const getLinkClassNew = ({ isActive }) =>
        isActive ? 'text-[#8448a0] font-bold' : 'text-black';

    const getSubLinkClass = ({ isActive }) =>
        isActive ? 'text-white bg-rblue block px-2 py-1 hover:bg-gray-100 hover:text-black' : 'text-black hover:bg-gray-100 px-2';


    return (
        <div className={`fixed z-50 top-0 left-0 w-full transition-colors duration-300 ${isScrolled || hoverService ? 'bg-white text-[#1c2e4a] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]' : 'bg-transparent text-white'}`}>
            <div className='lg:w-[95%] mx-auto sm:px-6 lg:px-6 relative'>
                <div className='flex items-center justify-between p-0'>
                    {/* Logo */}
                    {/* <div className={`flex-shrink-0 cursor-pointer pl-7 px-4 py-4 flex items-center`}>
                        <h1 className='text-24px inline-flex gap-3 items-center text-[#B5D44C] font-bold'>
                            YourBlogs
                        </h1>
                        <p className='font-bold text-[13px] text-[#B5D44C] tracking-[8px]'>
                            Quick Explore
                        </p>
                    </div> */}
                    <Link to="/">
                        <img src='/logo.png' alt='logo' className="lg:w-[250px] w-[200px] p-5 lg:p-1 lg:bg-white lg:rounded-lg" />
                    </Link>
                    {/* Mobile Menu Icon */}
                    <div className='md:hidden flex items-center justify-center shadow-sm'>
                        <button
                            type='button'
                            onClick={toggleMenu}
                            className={`focus:outline-none fixed top-4 right-6 ${isScrolled ? 'text-black' : 'text-white'}`}
                        >
                            <FaBars className='h-8 w-8 mt-1' />
                        </button>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className='hidden md:flex items-center px-10 py-4 space-x-6'>
                        <ul className='flex items-center space-x-6 relative bg-white px-3 py-2 rounded-lg'>
                            {navLinks.slice(0, -1).map((link) => (
                                <li
                                    key={link.route}
                                    className='group'
                                    onMouseEnter={() => link.name === 'Services' && setHoverService(true)}
                                    onMouseLeave={() => link.name === 'Services' && setHoverService(false)}
                                >
                                    <div className='flex items-center'>
                                        <NavLink
                                            to={link.route}
                                            className={getLinkClass}
                                            style={{ whiteSpace: 'nowrap' }}
                                        >
                                            {link.name}
                                        </NavLink>
                                        {link.name === 'Services' && (
                                            <FaChevronDown
                                                className={`ml-2 transition-transform duration-300 text-black ${hoverService ? 'rotate-180' : ''}`}
                                            />
                                        )}
                                    </div>

                                    {link.subLinks && (
                                        <div className='absolute top-full left-0 w-[650px] bg-white shadow-lg -mt-4 hidden grid-cols-2 gap-4 p-4 pt-6 opacity-0 group-hover:grid group-hover:opacity-100 transition-opacity duration-300'>
                                            {link.subLinks.map(category => (
                                                <div key={category.category} className='flex flex-col'>
                                                    <p className='font-bold text-gray-800 bg-gray-200 p-2 mb-4 text-rblue'>{category.category}</p>
                                                    <ul className='flex flex-col gap-2'>
                                                        {category.links.map(subLink => (
                                                            <li key={subLink.route}>
                                                                <NavLink
                                                                    to={subLink.route}
                                                                    className={getSubLinkClass}
                                                                >
                                                                    {subLink.name}
                                                                </NavLink>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}

                            {/* Book an Appointment button */}
                            <li className='ml-auto z-50'>
                                <NavLink to='/book-appointment'>
                                    <button className='flex items-center gap-2 px-5 py-2 bg-[#B5D44C] text-white font-bold rounded-full hover:bg-[#9ebe45] transition-all duration-300 ease-in-out'>
                                        Book an Appointment
                                        <FaArrowRight className='transition-transform duration-300 group-hover:translate-x-1' />
                                    </button>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Mobile Navigation Menu */}
                <div className={`md:hidden absolute top-16 left-0 w-full bg-white z-50 border border-gray-200 shadow-lg ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <div className='flex flex-col items-start space-y-4 py-4'>
                        {navLinks.map((link) => (
                            <div key={link.route}>
                                <div className='flex items-center'>
                                    <NavLink
                                        to={link.route}
                                        className={`${getLinkClassNew} block px-4 py-2 text-black hover:bg-gray-100`}
                                        onClick={() => {
                                            link.subLinks && toggleSubMenu(link.name);
                                            setIsMenuOpen(false); // Close the menu on link click
                                        }}
                                    >
                                        {link.name}
                                    </NavLink>
                                    {link.name === 'Services' && (
                                        <FaChevronDown
                                            className={`ml-2 transition-transform duration-300 ${openSubMenu === link.name ? 'rotate-180' : ''}`}
                                        />
                                    )}
                                </div>

                                {link.subLinks && openSubMenu === link.name && (
                                    <div className='flex flex-col mt-2 w-full bg-white'>
                                        {link.subLinks.map(category => (
                                            <div key={category.category} className='border-b last:border-b-0'>
                                                <p className='font-bold px-4 py-2 text-gray-800 bg-gray-200'>{category.category}</p>
                                                <ul>
                                                    {category.links.map(subLink => (
                                                        <li key={subLink.route}>
                                                            <NavLink
                                                                to={subLink.route}
                                                                className='block px-4 py-2 text-black hover:bg-gray-100'
                                                                onClick={() => setIsMenuOpen(false)}
                                                            >
                                                                {subLink.name}
                                                            </NavLink>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;
