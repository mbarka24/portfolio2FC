import styles from './AboutMe.module.css'
import { RiReactjsFill } from "react-icons/ri";
import { FaNodeJs , FaHtml5 , FaCss3 , FaBootstrap , FaPhp , FaLaravel , FaPython , FaFigma } from "react-icons/fa";
import { SiExpress , SiAdobephotoshop , SiMysql} from "react-icons/si";
import { BiLogoMongodb } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io5";
import { useEffect } from 'react';
import Aos from 'aos';

function AboutMe() {
    useEffect(()=>{
        Aos.init();
        Aos.refresh();
    },[])
    return (
        <section className={styles.about}>
            
            <h1 data-aos="fade-left" data-aos-duration="1000">About US</h1>
            <p data-aos="fade-in" data-aos-duration="1000">FeizhouCom is a Tech and corporate communications agency based in Morocco, offering a full range of services. In addition, we are proud to announce that FeizhouCom is the first agency in Morocco to offer services for creating ecological websites and mobile applications, aimed at minimizing the carbon footprint, thus making our partners and clients an example of leadership. sustainable in the market.
            </p>

            <div className={styles.skills} data-aos="fade-in" data-aos-duration="1000">
                <div className={styles.icon}>
                    <RiReactjsFill />
                </div>
                <div className={styles.icon}>
                    <FaNodeJs />
                </div>
                <div className={styles.icon}>
                    <SiExpress />
                </div>
                <div className={styles.icon}>
                    <BiLogoMongodb />
                </div>
                <div className={styles.icon}>
                    <FaHtml5 />
                </div>
                <div className={styles.icon}>
                    <FaCss3 />
                </div>
                <div className={styles.icon}>
                    <IoLogoJavascript />
                </div>
                <div className={styles.icon}>
                    <FaBootstrap />
                </div>
                <div className={styles.icon}>
                    <FaPhp />
                </div>
                <div className={styles.icon}>
                    <FaLaravel />
                </div>
                <div className={styles.icon}>
                    <SiMysql />
                </div>
                <div className={styles.icon}>
                    <FaPython />
                </div>
                <div className={styles.icon}>
                    <FaFigma />
                </div>
                <div className={styles.icon}>
                    <SiAdobephotoshop />
                </div>
                
            </div>
        </section>
    )
}
export default AboutMe;