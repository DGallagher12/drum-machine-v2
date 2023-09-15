import React from "react";
import { Select } from "antd";

const { Option } = Select;

function SoundSelector({ value, onChange }) {
  const sounds = [
    "Kick",
    "Snare",
    "HiHat",
    "Crash",
    // ... Add more sound options as needed
  ];

  return (
    <Select value={value} onChange={onChange} style={{ width: 120 }}>
      {sounds.map((sound) => (
        <Option key={sound} value={sound}>
          {sound}
        </Option>
      ))}
    </Select>
  );
}

export default SoundSelector;
