import styles from './MobileHeader.module.css';
import { RxHamburgerMenu } from "react-icons/rx";
import NavLinks from './NavLinks/NavLinks';


function MobileHeader() {
    return (
        <>
            <header className={styles.header}>
                <div className={styles.logo}>
                    <h1>hnn</h1>
                </div>
                <div className={styles.menu}>
                    <RxHamburgerMenu style={{ fontSize: "40px", color: "white" }} />
                </div>
            </header>
            <NavLinks />
        </>
    )
}
export default MobileHeader;