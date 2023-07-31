import { create } from "zustand";

interface Store {
  isPlaying: boolean;
  song: {
    songName: string;
    songAuthor: string;
    songFile: {
      path: string;
    };
  };
  setIsPlaying: () => void;
  setSong: (song: {
    songName: string;
    songAuthor: string;
    songFile: {
      path: string;
    };
  }) => void;
}

const useMusicStore = create<Store>((set) => ({
  isPlaying: false,
  song: {
    songName: "",
    songAuthor: "",
    songFile: {
      path: "",
    },
  },
  setIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setSong: (song) => set(() => ({ song })),
}));

export default useMusicStore;
