import { useState } from "react";

export default function useSwitch(initialValue = false) {
  const [isOn, setIsOn] = useState(initialValue);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return [isOn, toggle];
}
