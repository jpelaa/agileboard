import { useEffect } from "react";
export const useStyleForDrag = () => {
  useEffect(() => {
    document.addEventListener("dragstart", onDragStart, false);
    document.addEventListener("dragover", () => {}, false);
    document.addEventListener("dragend", onDragEnd, false);

    return () => {
      document.removeEventListener("dragstart", onDragStart, false);
      document.removeEventListener("dragover", () => {}, false);
      document.removeEventListener("dragend", onDragEnd, false);
    };
  });
};

const onDragStart = event => {
  event.target.style.background = "#d0bfff";
};

const onDragEnd = event => {
  event.target.style.background = "#ffffff";
};
