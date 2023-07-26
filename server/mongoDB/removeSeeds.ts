import song from "./models/song";

const removeAll = async () => {
  await song.deleteMany({});
};
removeAll();
