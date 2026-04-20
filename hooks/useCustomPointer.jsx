import { useState, useEffect } from "react";

export default function useCustomPointer() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    document.addEventListener("mousemove", mouseMove);
    return () => document.removeEventListener("mousemove", mouseMove);
  }, []);
  const customizedPointer = (
    <div
      style={{
        position: "fixed",
        top: mousePosition.y,
        left: mousePosition.x,
        transform: "translate(-50%, -50%)",
        cursor: "none",
      }}
    >
      &#9730;
    </div>
  );

  return customizedPointer;
}
