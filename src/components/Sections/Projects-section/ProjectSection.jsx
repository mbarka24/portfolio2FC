
import Lottie from 'lottie-react';
import styles from './ProjectsSection.module.css'
import animationData from '../../../assets/Animations/projects-animation.json'
import { IoEyeOutline } from "react-icons/io5";
import { useEffect } from 'react';
import Aos from 'aos';
// Import Swiper React components
function ProjectSection() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])
    return (
        <section className={styles.projects}>
            <aside className={styles.avatar} data-aos="fade-in" data-aos-duration="1500">
                <Lottie animationData={animationData} />
            </aside>
            <div className={styles.content}>
                <h1 data-aos="fade-left" data-aos-duration="1500">Our Projects</h1>
                <div className={styles.myProjects} data-aos="fade-in" data-aos-duration="1500">
                    <div className={styles.project} style={{ backgroundImage: " url(/public/images/P1.jpg)" }}>
                        <div className={styles.icon}>
                            <IoEyeOutline />
                        </div>
                    </div>
                    <div className={styles.project} style={{ backgroundImage: " url(/public/images/P2.jpg)" }}>
                        <div className={styles.icon}>
                            <IoEyeOutline />
                        </div>

                    </div>
                    <div className={styles.project} style={{ backgroundImage: " url(/public/images/P3.jpg)" }}>
                        <div className={styles.icon}>
                            <IoEyeOutline />
                        </div>
                    </div>
                    <div className={styles.project} style={{ backgroundImage: " url(/public/images/P4.jpg)" }}>
                        <div className={styles.icon}>
                            <IoEyeOutline />
                        </div>
                    </div>
                    <div className={styles.project} style={{ backgroundImage: " url(/public/images/P5.jpg)" }}>
                        <div className={styles.icon}>
                            <IoEyeOutline />
                        </div>
                    </div>
                    <div className={styles.project} style={{ backgroundImage: " url(/public/images/P6.jpg)" }}>
                        <div className={styles.icon}>
                            <IoEyeOutline />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ProjectSection;