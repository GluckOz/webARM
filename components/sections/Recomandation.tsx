import { SongItem } from "../SongItem";

const Recomendations = () => {

  const trackList = [
    {
      name: "asdsad",
      artist: "Monkey"
    },
    {
      name: "asdsad",
      artist: "Monkey"
    },
    {
      name: "asdsad",
      artist: "Monkey"
    },
    {
      name: "asdsad",
      artist: "Monkey"
    },
  ]

  return (
    <div className="flex p-6 flex-col border border-neutral-700 bg-neutral-800 rounded-3xl w-[46%] gap-y-2">
      {trackList.map((item) => (
        <SongItem key={item.name} trackName={item.name} artist={item.artist}/>
      ))}
    </div>
  );
}

export default Recomendations;