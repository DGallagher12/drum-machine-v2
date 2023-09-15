import { createSlice } from "@reduxjs/toolkit";

const soundsLibrary = [
  { label: "Kick", url: "/path/to/kick.wav" },
  { label: "Snare", url: "/path/to/snare.wav" },
  // ... other sounds
];

const drumSlice = createSlice({
  name: "drum",
  initialState: {
    channels: [
      {
        id: 1,
        sound: "kick",
        volume: 0.8,
        playing: false,
        sequence: new Array(16).fill(false), // 16-step sequence initialized to 'inactive'
      },
      // ... default channels
    ],
  },
  reducers: {
    setChannelSound: (state, action) => {
      const { channel, sound } = action.payload;
      state.channels[channel].sound = sound;
    },
    setChannelVolume: (state, action) => {
      const { channel, volume } = action.payload;
      state.channels[channel].volume = volume;
    },
    toggleChannelPlay: (state, action) => {
      const channel = action.payload;
      state.channels[channel].playing = !state.channels[channel].playing;
      if (state.channels[channel].playing) {
        playSound(
          state.channels[channel].sound,
          state.channels[channel].volume
        );
      }
    },
    addChannel: (state) => {
      state.channels.push({ sound: "", volume: 1, playing: false });
    },
    removeChannel: (state, action) => {
      state.channels.splice(action.payload, 1);
    },
    toggleStep: (state, action) => {
      const { channelId, stepIndex } = action.payload;
      const channel = state.channels.find((ch) => ch.id === channelId);
      if (channel) {
        channel.sequence[stepIndex] = !channel.sequence[stepIndex];
      }
    },
  },
});

function playSound(sound, volume) {
  const audio = new Audio(sound);
  audio.volume = volume;
  audio.play();
}

export const {
  toggleStep,
  setChannelSound,
  setChannelVolume,
  toggleChannelPlay,
  addChannel,
  removeChannel,
} = drumSlice.actions;

export default drumSlice.reducer;
