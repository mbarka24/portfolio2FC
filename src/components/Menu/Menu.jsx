import styles from './Menu.module.css'
import { CiSquareRemove } from "react-icons/ci";
import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser , FaPhone } from "react-icons/fa6";

import { GrProjects } from "react-icons/gr";


function Menu({show}){
    return(
        <div className={styles.menu}>
            <header className={styles.header}>
                <CiSquareRemove style={{fontSize:"45px" , cursor:"pointer" , color:"white"}} onClick={()=>show(false)}/>
            </header>

            <nav className={styles.nav_links}>
                <p><AiOutlineHome /> Home</p>
                <p><FaRegUser /> About</p>
                <p><GrProjects />  Projects</p>
                <p><FaPhone />  Contact</p>
            </nav>

            <div className={styles.copy_rights}>
                
            </div>
        </div>
    )
}
export default Menu;