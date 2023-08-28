import PropTypes from "prop-types";
import { useSelector } from "react-redux";

const Settings = () => {
  return (
    <div className="drum-settings">
      <div className="on-off-btn">on/off</div>
      <div className="display-sound-name">
        {useSelector((state) => state.sounds.soundPlayed)}
      </div>
      <div className="volume">
        <input type="range" id="volume" name="volume" min="0" max="100" />
        <label htmlFor="volume">Volume</label>
      </div>
      <div className="soundbank-select">z</div>
    </div>
  );
};

export default Settings;
