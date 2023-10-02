import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { MENU_ITEMS } from "../../constants";
import { menuActions } from "../../slice/menu";

const Board = () => {
  const dispatch = useAppDispatch();
  const { activeMenuItem, actionMenuItem } = useAppSelector(
    (state) => state.menu
  );
  const { color, size } = useAppSelector(
    (state) => state.toolbox[activeMenuItem]
  );
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const shouldDraw = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    // when mounting
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const beginPath = (x, y) => {
      context?.beginPath();
      context?.moveTo(x, y);
    };

    const drawLine = (x, y) => {
      context?.lineTo(x, y);
      context?.stroke();
    };

    const handleMouseDown = (e) => {
      shouldDraw.current = true;
      beginPath(e.clientX, e.clientY);
    };

    const handleMouseMove = (e) => {
      if (!shouldDraw.current) return;
      drawLine(e.clientX, e.clientY);
    };

    const handleMouseUp = (e) => {
      shouldDraw.current = false;
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);
    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;
    else if (canvasRef.current !== null) {
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      const changeConfig = () => {
        context.strokeStyle = color;
        context.lineWidth = size;
      };
      changeConfig();
    }
  }, [color, size, canvasRef.current]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (actionMenuItem === MENU_ITEMS.DOWNLOAD) {
      const URL = canvas.toDataURL("image/png");
      const anchor = document.createElement("a");
      anchor.href = URL;
      anchor.download = "sketch.png";
      anchor.click();
    }
    dispatch(menuActions.actionItemClick(null));
  }, [actionMenuItem, canvasRef.current, dispatch]);

  return <canvas ref={canvasRef}></canvas>;
};

export default Board;
