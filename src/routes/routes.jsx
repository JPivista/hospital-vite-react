import { useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home/Home';
import AboutUs from '../pages/AboutUs/AboutUs';
import Services from '../pages/Servicess/Services';
import OurTeam from '../pages/OurTeam/OurTeam';
import ContactUs from '../pages/ContactUs/ContactUs';
import NotFound from '../pages/NotFound/NotFound';

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
                // Catch-all route for non-existing paths
                { path: "*", element: <NotFound /> }
            ]
        }
    ]);

    return routes;
}

export default AppRoutes;
