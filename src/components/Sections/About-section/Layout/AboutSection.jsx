import Aos from 'aos';
import AboutMe from '../AboutMe/AboutMe';
import styles from './AboutSection.module.css'
import { IoIosArrowForward } from "react-icons/io";
import { useEffect, useRef } from 'react';
import Education from '../Education/Education';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import Lottie  from 'lottie-react';
import animationData from '../../../../assets/Animations/aboutme-animation.json'

function AboutSection() {
    let navigate = useNavigate()
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])

    
    return (
        <section className={styles.section_about}>
            <aside className={styles.sideBar} data-aos="fade-in" data-aos-duration="1500">
                <Lottie   animationData={animationData} style={{width:"500px"}}/>

            </aside>

            <div className={styles.content}>
                <AboutMe />
            </div>
        </section>
    )
}
export default AboutSection;