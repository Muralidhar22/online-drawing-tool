import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faEraser, faRotateLeft, faRotateRight, faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import styles from "./index.module.css";
const Menu = () => {
    return (
        <div className={styles.menuContainer}>
            <div role="button" className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faPencil} className={styles.icons} />
            </div>
            <div role="button" className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faEraser} className={styles.icons}  />
            </div>
            <div role="button" className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateLeft} className={styles.icons}  />
            </div>
            <div role="button" className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faRotateRight} className={styles.icons}  />
            </div>
            <div role="button" className={styles.iconWrapper}>
                <FontAwesomeIcon icon={faFileArrowDown} className={styles.icons}  />
            </div>
        </div>
    )
}

export default Menu;