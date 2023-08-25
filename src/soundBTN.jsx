import React from "react";
import PropTypes from "prop-types";

const SoundBTN = ({ props }) => {
  const audioRef = React.createRef();
  const playSound = () => {
    audioRef.current.play();
  };
  console.log(props);
  return (
    <div id={props.name} className="drum-pad" onClick={playSound}>
      <audio ref={audioRef} id={props.name}>
        <source src={props.link} type="audio/mp3" />
      </audio>
    </div>
  );
};

SoundBTN.propTypes = {
  props: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default SoundBTN;
