//import PropTypes from "prop-types";
import { useState } from "react";
import { useSelector } from "react-redux";
import { changeBank } from "./redux/soundsSlice";

const Settings = () => {
  const [drumOn, setDrumOn] = useState(true);

  function handleSetDrum() {
    setDrumOn(() => {
      return !drumOn;
    });
  }

  return (
    <div className="drum-settings">
      {drumOn ? (
        <div className="on-off-btn" onClick={handleSetDrum}>
          <div className="on-btn">ON</div>
          <div className="off-btn turn-off"></div>
        </div>
      ) : (
        <div className="on-off-btn" onClick={handleSetDrum}>
          <div className="on-btn turn-off"></div>
          <div className="off-btn ">OFF</div>
        </div>
      )}
      <div className="display-sound-name">
        {useSelector((state) => state.sounds.soundPlayed)}
      </div>
      <div className="volume">
        <input type="range" id="volume" name="volume" min="0" max="100" />
        <label htmlFor="volume">Volume</label>
      </div>
      <div className="soundbank-select">soundbank</div>
    </div>
  );
};

export default Settings;
