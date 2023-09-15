import React from "react";
import { useDispatch } from "react-redux";
import SoundSelector from "../SoundSelector/SoundSelector.js";
import VolumeSlider from "../VolumeSlider/VolumeSlider.js";
import ControlButtons from "../ControlButtons/ControlButtons.js";
import {
  setChannelSound,
  setChannelVolume,
  toggleChannelPlay,
  removeChannel,
} from "../DrumSlice/DrumSlice";

function Channel({ channelIndex, channelData }) {
  const dispatch = useDispatch();

  return (
    <div>
      <p>Channel {channelIndex + 1}</p>
      <SoundSelector
        value={channelData.sound}
        onChange={(sound) =>
          dispatch(setChannelSound({ channel: channelIndex, sound }))
        }
      />
      <VolumeSlider
        value={channelData.volume}
        onChange={(volume) =>
          dispatch(setChannelVolume({ channel: channelIndex, volume }))
        }
      />
      <ControlButtons
        isPlaying={channelData.playing}
        onPlay={() => dispatch(toggleChannelPlay(channelIndex))}
        onRemove={() => dispatch(removeChannel(channelIndex))}
      />
    </div>
  );
}

export default Channel;
