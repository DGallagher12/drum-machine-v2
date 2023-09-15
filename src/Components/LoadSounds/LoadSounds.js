// LoadSounds.js

const context = new (window.AudioContext || window.webkitAudioContext)();

// A function that loads a sound file and returns its buffer
export const loadSound = async (url) => {
  const response = await fetch(url);
  const arrayBuffer = await response.arrayBuffer();
  const audioBuffer = await context.decodeAudioData(arrayBuffer);
  return audioBuffer;
};

// Example sound URLs, adjust these to your own
export const drumSounds = {
  kick: await loadSound("/path-to-sounds/kick.wav"),
  snare: await loadSound("/path-to-sounds/snare.wav"),
  hiHat: await loadSound("/path-to-sounds/hiHat.wav"),
  tom: await loadSound("/path-to-sounds/tom.wav"),
};
