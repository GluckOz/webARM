import { SongItem } from "../SongItem";

const Recomendations = () => {
  return (
    <div className="flex p-6 flex-col border border-black bg-neutral-200 rounded-3xl w-[46%] gap-y-2">
      <SongItem />
      <SongItem />
      <SongItem />
      <SongItem />
    </div>
  );
}

export default Recomendations;