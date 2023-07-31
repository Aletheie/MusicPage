import { create } from "zustand";

interface Store {
  isPlaying: boolean;
  songName?: string;
  setIsPlaying: () => void;
  setSongName: (songName: string) => void;
}

const useMusicStore = create<Store>((set) => ({
  isPlaying: false,
  songName: undefined,
  setIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
  setSongName: (songName) => set(() => ({ songName })),
}));

export default useMusicStore;
