import Lottie from 'lottie-react';
import styles from './Contactsection.module.css'
import animationData from '../../../assets/Animations/conact-animation.json'
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { useEffect } from 'react';
import Aos from 'aos';

function ContactSection(){
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, [])
    return(
        <section className={styles.contact}>
            <aside className={styles.avatar} data-aos="fade-in" data-aos-duration="1500">
                <Lottie animationData={animationData} />
            </aside>
            <div className={styles.content}>
                <h1 data-aos="fade-left" data-aos-duration="1500">Requert a quote</h1>
                <form action="" className={styles.form}>
                    <input type="text"  placeholder='Full name...' data-aos="fade-left" data-aos-duration="1500"/>
                    <input type="text"  placeholder='Email...' data-aos="fade-left" data-aos-duration="2000"/>
                    <textarea name="" id="" rows={10} placeholder='Message...' data-aos="fade-left" data-aos-duration="2500"></textarea>
                    <button data-aos="fade-up" data-aos-duration="2500">Send</button>
                </form>

                {/* <div className={styles.contactInfo}>
                    <div className={styles.info}>
                        <p> <FaLocationDot /> Casablanca - Morocco</p>
                    </div>
                    <div className={styles.info}>
                        <p> <FaPhoneAlt /> 06.76.86.98.19</p>
                    </div>
                    <div className={styles.info}>
                        <p> <FaLocationDot /> Casablanca</p>
                    </div>
                </div> */}
            </div>
        </section>
    )
}
export default ContactSection;