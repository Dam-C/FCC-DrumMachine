import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { displaySound } from "./redux/soundsSlice";

const SoundBTN = ({ props }) => {
  const dispatch = useDispatch();
  const audioRef = React.createRef();

  const playSound = () => {
    audioRef.current.play();
    dispatch(displaySound(props.name));
  };

  const handleKeyDown = (event) => {
    if (
      event.key === props.keypad ||
      event.key === props.keypad.toLowerCase()
    ) {
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
    <div id={props.name} className="drum-pad" onClick={() => playSound()}>
      {props.keypad}
      <audio className="clip" ref={audioRef} id={props.keypad} src={props.link}>
        <source type="audio/mp3" />
      </audio>
    </div>
  );
};

SoundBTN.propTypes = {
  props: PropTypes.shape({
    name: PropTypes.string.isRequired,
    keypad: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
  }).isRequired,
};

export default SoundBTN;
