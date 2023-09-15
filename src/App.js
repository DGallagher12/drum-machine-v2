import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addChannel } from "./Components/DrumSlice/DrumSlice.js";
import Channel from "./Components/Channel/Channel";
import AddChannelButton from "./Components/AddChannelButton/AddChannelButton";

function App() {
  const channels = useSelector((state) => state.drum.channels);
  const dispatch = useDispatch();

  return (
    <div>
      {channels.map((channel, idx) => (
        <Channel key={idx} channelIndex={idx} channelData={channel} />
      ))}
      <AddChannelButton onClick={() => dispatch(addChannel())} />
    </div>
  );
}

export default App;
