import useSwitch from "../hooks/useSwitch";
import useDate from "../hooks/useDate";
import { useEffect } from "react";

function App() {
  const [isOn, toggle] = useSwitch();
  const currentDate = useDate();

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
    </>
  );
}

export default App;
