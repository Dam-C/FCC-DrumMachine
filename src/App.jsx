import "./App.css";
import Settings from "./settings";

import { useSelector } from "react-redux";
import SoundBTN from "./soundBTN";

function App() {
  const pads = useSelector((state) => state.sounds.soundBank.soundsList);
  // const audioRefs = pads.map(() => React.createRef());
  //console.log(audioRefs);
  // const playSound = (index) => {
  //   audioRefs[index].current.play();
  // };
  //console.log(pads);

  return (
    <main id="drum-machine">
      <div id="display">
        <div className="drum-board">
          {pads.map((pad, index) => (
            <SoundBTN props={pad} key={index} />
          ))}
        </div>
        <Settings />
      </div>
    </main>
  );
}

export default App;
