import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPencil,
  faEraser,
  faRotateLeft,
  faRotateRight,
  faFileArrowDown,
} from "@fortawesome/free-solid-svg-icons";
import styles from "./index.module.css";
import { MENU_ITEMS } from "../../constants";
import { menuActions } from "../../slice/menu";
import { useAppDispatch, useAppSelector } from "../../store";
import cx from "classnames";

const Menu = () => {
  const dispatch = useAppDispatch();
  const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem);

  const handleMenuItemClick = (menuItem: string) => {
    return () => {
      dispatch(menuActions.menuItemClick(menuItem));
    };
  };

  return (
    <div className={styles.menuContainer}>
      <div
        role="button"
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.PENCIL,
        })}
        onClick={handleMenuItemClick(MENU_ITEMS.PENCIL)}
      >
        <FontAwesomeIcon icon={faPencil} className={styles.icons} />
      </div>
      <div
        role="button"
        className={cx(styles.iconWrapper, {
          [styles.active]: activeMenuItem === MENU_ITEMS.ERASER,
        })}
        onClick={handleMenuItemClick(MENU_ITEMS.ERASER)}
      >
        <FontAwesomeIcon icon={faEraser} className={styles.icons} />
      </div>
      <div role="button" className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateLeft} className={styles.icons} />
      </div>
      <div role="button" className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faRotateRight} className={styles.icons} />
      </div>
      <div role="button" className={styles.iconWrapper}>
        <FontAwesomeIcon icon={faFileArrowDown} className={styles.icons} />
      </div>
    </div>
  );
};

export default Menu;
