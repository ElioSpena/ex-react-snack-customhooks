import { useEffect, useState } from "react";

export default function useKeyPress(key) {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handlePress = (e) => e.key === key && setIsPressed(true);
    const handleLeft = (e) => e.key === key && setIsPressed(false);

    document.addEventListener("keydown", handlePress);
    document.addEventListener("keyup", handleLeft);

    return () => {
      document.removeEventListener("keydown", handlePress);
      document.removeEventListener("keyup", handleLeft);
    };
  }, []);

  return isPressed;
}
