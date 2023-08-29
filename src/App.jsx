import "./App.css";
import Settings from "./settings";

import { useSelector } from "react-redux";
import SoundBTN from "./soundBTN";

function App() {
  const pads = useSelector((state) => state.sounds.soundBank.soundsList);
  return (
    <main id="drum-machine">
      <div id="display">
        <div className="drum-board">
          {pads.map((pad, index) => (
            <SoundBTN
              key={index}
              name={pad.name}
              keypad={pad.keypad}
              link={pad.link}
            />
          ))}
        </div>
        <Settings />
      </div>
    </main>
  );
}

export default App;
