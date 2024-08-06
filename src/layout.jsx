import { Outlet } from 'react-router-dom';
import styles from './App.module.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Laptop/Header';
import AboutSection from './components/Sections/About-section/Layout/AboutSection';
import HeroSection from './components/Sections/Hero-section/HeroSection';



function Layout({children}){
    return(
        <div className={styles.layout}>
            <Header />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
export default Layout;