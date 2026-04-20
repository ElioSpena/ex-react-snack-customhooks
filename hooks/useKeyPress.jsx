import { useEffect, useState } from "react";

export default function useKeyPress() {
  const [isPressed, setIsPressed] = useState(false);

  useEffect(() => {
    const handlePress = () => setIsPressed(true);
    const handleLeft = () => setIsPressed(false);

    document.addEventListener("keydown", handlePress);
    document.addEventListener("keyup", handleLeft);

    return () => {
      document.removeEventListener("keydown", handlePress);
      document.removeEventListener("keyup", handleLeft);
    };
  }, []);

  return isPressed;
}
