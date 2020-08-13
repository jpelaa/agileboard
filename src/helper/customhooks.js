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

const onDragStart = (event) => {
  event.target.style.background = "#d0bfff";
};

const onDragEnd = (event) => {
  event.target.style.background = "#ffffff";
};

export const useEnterClick = (callBack) => {
  useEffect(() => {
    document.addEventListener("keypress", onKeyPress, false);

    return () => {
      document.removeEventListener("keypress", onKeyPress, false);
    };
  });

  const onKeyPress = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      callBack();
    }
  };
};

export function useOnClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }

      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}
