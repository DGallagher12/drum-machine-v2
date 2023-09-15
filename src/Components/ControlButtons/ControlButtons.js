import React from "react";
import { Button } from "antd";

function ControlButtons({ isPlaying, onPlay, onRemove }) {
  return (
    <div>
      <Button onClick={onPlay}>{isPlaying ? "Stop" : "Play"}</Button>
      <Button onClick={onRemove}>Remove</Button>
    </div>
  );
}

export default ControlButtons;
