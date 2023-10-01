import { useEffect, useRef } from "react";
import { useAppSelector } from "../../store";
import cx from "classnames";

const Board = () => {
  const activeMenuItem = useAppSelector((state) => state.menu.activeMenuItem);
  const { color, size } = useAppSelector(
    (state) => state.toolbox[activeMenuItem]
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // when mounting
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }, []);

  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
