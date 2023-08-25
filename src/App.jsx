import "./App.css";
import React from "react";
import { useSelector } from "react-redux";

function App() {
  const pads = useSelector((state) => state.sounds.soundBank.soundsList);
  const audioRefs = pads.map(() => React.createRef());
  const playSound = (index) => {
    audioRefs[index].current.play();
  };
  console.log(pads);
  return (
    <main id="drum-machine">
      <div id="display">
        <div className="drum-board">
          {pads.map((pad, index) => (
            <div
              key={pad.name}
              id={pad.name}
              className="drum-pad"
              onClick={() => playSound(index)}
            >
              {pad.keypad}
              <audio ref={audioRefs[index]} id={pad.name} src={pad.link}>
                <source type="audio/mp3" />
              </audio>
            </div>
          ))}
        </div>
        <div className="drum-settings"></div>
      </div>
    </main>
  );
}

export default App;
