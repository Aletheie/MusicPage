interface SongType {
  songName: string;
  songAuthor: string;
  songFile: {
    name: string;
    type: string;
    path: string;
  };
}

export default SongType;
