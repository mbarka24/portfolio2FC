
import { useEffect } from 'react';
import Typewriter from '../../Typewriter';
import styles from './HeroSection.module.css'
import Aos from 'aos';

function HeroSection() {
    useEffect(()=>{
        Aos.init();
        Aos.refresh();
    },[])
    return (
        <section className={styles.container}>
            <aside className={styles.left_side}>
                <p data-aos="fade-in" data-aos-duration="1000">W<Typewriter text="elcome to our Portfolio" delay={150} /></p>
                <h1  data-aos="fade-right" data-aos-duration="2000">FeizhouCom Agency</h1>
                <div className={styles.buttons} data-aos="fade-in" data-aos-duration="2000">
                    <button onClick={() => window.open('https://api.whatsapp.com/send?phone=212651779725&text=FeizhouCom', '_blank')}>let's talk</button>
                    <button onClick={() => window.open('https://feizhoucom.com/', '_blank')}>WebSite</button>
                </div>
            </aside>
            <aside className={styles.right_side} data-aos="fade-in" data-aos-duration="2000">
                <div className={styles.image_container}>

                </div>
                <div className={styles.image}>
                    
                </div>
            </aside>
        </section>
    ) 
}
export default HeroSection;