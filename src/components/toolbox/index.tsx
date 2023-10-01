import styles from "./index.module.css";
import { COLORS, MENU_ITEMS } from "../../constants";
import { useAppSelector, useAppDispatch } from "../../store";
import { ChangeEvent } from "react";
import { toolboxActions } from "../../slice/toolbox";
import cx from "classnames";

const Toolbox = () => {
  const dispatch = useAppDispatch();
  const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem);
  const showStrokeToolOption = activeMenuItem === MENU_ITEMS.PENCIL;
  const showBrushToolOption =
    activeMenuItem === MENU_ITEMS.PENCIL ||
    activeMenuItem === MENU_ITEMS.ERASER;
  const { color } = useAppSelector((state) => state.toolbox[activeMenuItem]);

  const updateBrushSize = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(
      toolboxActions.changeBrushSize({
        item: activeMenuItem,
        size: e.target.value,
      })
    );
  };

  const updateColor = (newColor: keyof typeof COLORS) => {
    dispatch(
      toolboxActions.changeColor({
        item: activeMenuItem,
        color: COLORS[newColor],
      })
    );
  };

  return (
    <div className={styles.toolboxContainer}>
      {showStrokeToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Stroke Color</h4>
          <div
            className={styles.itemContainer}
            onClick={(e) => {
              if (e.target instanceof HTMLDivElement && e.target.id in COLORS) {
                updateColor(e.target.id as keyof typeof COLORS);
              }
            }}
          >
            <div
              id="BLACK"
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLACK,
              })}
              style={{ backgroundColor: COLORS.BLACK }}
            />
            <div
              id="RED"
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.RED,
              })}
              style={{ backgroundColor: COLORS.RED }}
            />
            <div
              id="GREEN"
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.GREEN,
              })}
              style={{ backgroundColor: COLORS.GREEN }}
            />
            <div
              id="BLUE"
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.BLUE,
              })}
              style={{ backgroundColor: COLORS.BLUE }}
            />
            <div
              id="ORANGE"
              className={cx(styles.colorBox, {
                [styles.active]: color === COLORS.ORANGE,
              })}
              style={{ backgroundColor: COLORS.ORANGE }}
            />
          </div>
        </div>
      )}
      {showBrushToolOption && (
        <div className={styles.toolItem}>
          <h4 className={styles.toolText}>Brush Size</h4>
          <div className={styles.itemContainer}>
            <input
              type="range"
              min={1}
              max={10}
              step={1}
              onChange={updateBrushSize}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Toolbox;
