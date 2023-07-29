export interface SongType {
  songName: string;
  songAuthor: string;
  _id?: string;
  songFile: {
    name: string;
    type: string;
    path: string;
  };
}
