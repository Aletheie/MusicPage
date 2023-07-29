export interface SongType {
  songName: string;
  songAuthor: string;
  _id?: string;
  isFilledHeart: boolean;
  songFile: {
    name: string;
    type: string;
    path: string;
  };
}
