import useSwitch from "../hooks/useSwitch";
import useDate from "../hooks/useDate";
import useCustomPointer from "../hooks/useCustomPointer";
import useKeyPress from "../hooks/useKeyPress";
import { useEffect } from "react";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();
  const customPointer = useCustomPointer();
  const isEnterPressed = useKeyPress("Enter");

  return (
    <>
      {/*useSwitch */}
      <div>
        <h1>Il valore è: {isOn ? "ON" : "OFF"}</h1>
        <button onClick={toggle}>Cambia Stato</button>
      </div>

      {/*useDate*/}
      <div>
        <h1>Data e ora attuali:</h1>
        <p>{currentDate.toLocaleString()}</p>
      </div>

      {/*useCustomPointer*/}
      <div>
        <h1>Sposta il mouse per vedere il cursore personalizzato!</h1>
        {customPointer}
      </div>

      {/*useKeyPress*/}
      <div>
        <h1>Tieni premuto "Enter" per testare il custom hook</h1>
        <p>{isEnterPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
      </div>
    </>
  );
}

export default App;
