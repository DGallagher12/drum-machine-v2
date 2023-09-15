// PlaySequence.js

import { drumSounds } from "../LoadSounds/LoadSounds.js";

const context = new (window.AudioContext || window.webkitAudioContext)();

const playSound = (soundBuffer) => {
  const source = context.createBufferSource();
  source.buffer = soundBuffer;
  source.connect(context.destination);
  source.start();
};

export const playSequence = (channels) => {
  const stepDuration = 0.5; // this represents half a second duration for each step

  channels.forEach((channel) => {
    if (channel.playing && channel.steps) {
      channel.steps.forEach((step, index) => {
        if (step) {
          const time = context.currentTime + stepDuration * index;
          playAtTime(drumSounds[channel.sound], time);
        }
      });
    }
  });
};

const playAtTime = (soundBuffer, time) => {
  const source = context.createBufferSource();
  source.buffer = soundBuffer;
  source.connect(context.destination);
  source.start(time);
};
