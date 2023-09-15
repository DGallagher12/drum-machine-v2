import React from "react";
import { Slider } from "antd";

function VolumeSlider({ value, onChange }) {
  return <Slider value={value * 100} onChange={(val) => onChange(val / 100)} />;
}

export default VolumeSlider;
