import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { displaySound } from "./redux/soundsSlice";

const SoundBTN = ({ name, keypad, link }) => {
  const dispatch = useDispatch();
  const audioRef = React.createRef();

  const playSound = () => {
    audioRef.current.play();
    dispatch(displaySound(name));
  };

  const handleKeyDown = (event) => {
    if (event.key === keypad || event.key === keypad.toLowerCase()) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      id={name === "undefined" ? "temp" : name}
      className="drum-pad"
      onClick={() => playSound()}
    >
      {keypad}
      <audio
        className="clip"
        ref={audioRef}
        id={keypad}
        src={link}
        type="audio/mp3"
      ></audio>
    </div>
  );
};

SoundBTN.propTypes = {
  name: PropTypes.string.isRequired,
  keypad: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SoundBTN;
