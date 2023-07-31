import { create } from "zustand";
import { SongType } from "../utils/SongType";

interface Store {
  isPlaying: boolean;
  song: SongType;
  setIsPlaying: () => void;
  setSong: (song: SongType) => void;
}

const useMusicStore = create<Store>((set) => ({
  isPlaying: false,
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
  setIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setSong: (song) => set(() => ({ song })),
}));

export default useMusicStore;
