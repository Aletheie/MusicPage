import { create } from "zustand";
import { SongType } from "../utils/SongType";

interface Store {
  isGlobalPlaying: boolean;
  song: SongType;
  setIsGlobalPlaying: () => void;
  setSong: (song: SongType) => void;
}

const useMusicStore = create<Store>((set) => ({
  isGlobalPlaying: false,
  song: {
    songName: "",
    songAuthor: "",
    _id: "",
    isFilledHeart: false,
    songFile: {
      name: "",
      type: "",
      path: "",
    },
  },
  setIsGlobalPlaying: () =>
    set((state) => ({ isGlobalPlaying: !state.isGlobalPlaying })),
  setSong: (song) => set(() => ({ song })),
}));

export default useMusicStore;
