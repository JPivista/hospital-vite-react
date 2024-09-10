import { useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import Services from '../pages/Servicess/Services';
import OurTeam from '../pages/OurTeam/OurTeam';
import ContactUs from '../pages/ContactUs/ContactUs';

function AppRoutes() {
    let routes = useRoutes([
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "/", element: <Home /> },
                { path: "about-us", element: <AboutUs /> },
                { path: "services", element: <Services /> },
                { path: "our-team", element: <OurTeam /> },
                { path: "contact-us", element: <ContactUs /> },
            ]
        }
    ]);

    return routes;
}

export default AppRoutes;
