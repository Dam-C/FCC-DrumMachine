import "./App.css";
import { default as SoundBTN } from "./soundBTN";

import { useSelector } from "react-redux";

function App() {
  const pads = useSelector((state) => state.sounds.soundBank.soundsList);
  console.log(pads);
  return (
    <main id="drum-machine">
      <div id="display">
        <div className="drum-board">
          {pads.map((pad, i) => {
            console.log(pad);
            return <SoundBTN key={i} />;
          })}
        </div>
        <div className="drum-settings"></div>
      </div>
    </main>
  );
}

export default App;
