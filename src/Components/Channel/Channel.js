import React from "react";
import { useDispatch } from "react-redux";
import SoundSelector from "../SoundSelector/SoundSelector";
import VolumeSlider from "../VolumeSlider/VolumeSlider";
import ControlButtons from "../ControlButtons/ControlButtons";
import StepSequencer from "../StepSequencer/StepSequencer"; // Assuming you'd create a folder for StepSequencer
import { toggleStep } from "../DrumSlice/DrumSlice"; // Adjust this import path based on the actual location of your Redux slice

function Channel({ channelData }) {
  const dispatch = useDispatch();

  const handleToggleStep = (stepIndex) => {
    dispatch(toggleStep({ channelId: channelData.id, stepIndex }));
  };

  return (
    <div className="channel">
      <SoundSelector sound={channelData.sound} channelId={channelData.id} />
      <VolumeSlider volume={channelData.volume} channelId={channelData.id} />
      <ControlButtons
        playing={channelData.playing}
        channelId={channelData.id}
      />
      <StepSequencer
        sequence={channelData.sequence}
        onToggleStep={handleToggleStep}
      />
    </div>
  );
}

export default Channel;
