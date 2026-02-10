import Home from './pages/Home';
import About from './pages/About';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "About": About,
    "Gallery": Gallery,
    "Contact": Contact,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: Layout,
};