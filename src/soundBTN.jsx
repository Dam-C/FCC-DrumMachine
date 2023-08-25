import React from "react";

const SoundBTN = ({ props }) => {
  const audioRef = React.createRef();
  const playSound = () => {
    audioRef.current.play();
  };

  return (
    <div id="temp" className="drum-pad" onClick={playSound}>
      <audio ref={audioRef} id="te">
        <source src="re" type="audio/mp3" />
      </audio>
    </div>
  );
};

export default SoundBTN;
