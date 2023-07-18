import { create } from "zustand";

interface Store {
  isPlaying: boolean;
  setIsPlaying: () => void;
}

const useMusicStore = create<Store>((set) => ({
  isPlaying: false,
  setIsPlaying: () => set((state) => ({ isPlaying: !state.isPlaying })),
}));

export default useMusicStore;
