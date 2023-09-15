import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { playSequence } from "../PlaySequence/PlaySequence.js"; // Adjust this path to the location of playSequence.js
import { toggleChannelPlay } from "../DrumSlice/DrumSlice";

function ControlButtons({ channelId }) {
  const dispatch = useDispatch();
  const isPlaying = useSelector(
    (state) => state.drum.channels.find((ch) => ch.id === channelId).playing
  );
  const channels = useSelector((state) => state.drum.channels);
  const handlePlay = () => {
    if (!isPlaying) {
      playSequence(channels); // Using channels here
      dispatch(toggleChannelPlay(channelId));
    }
  };

  const handleStop = () => {
    if (isPlaying) {
      // Stop logic, can include stopping the audio, resetting the sequence position etc.
      dispatch(toggleChannelPlay(channelId));
    }
  };

  return (
    <div className="control-buttons">
      <button onClick={handlePlay}>Play</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  );
}

export default ControlButtons;
