const context = new AudioContext();

export const playSound = (soundBuffer, time) => {
  const source = context.createBufferSource();
  source.buffer = soundBuffer;
  source.connect(context.destination);
  source.start(time);
};
