import Image from "next/image";
import { PlaylistItem } from "@/components/PlaylistItem";
import nyc from "@/assets/images/nyc.jpg"

const Charts = () => {
  return (
    <div className="flex p-6 flex-col justify-between border-black bg-neutral-200 items-start w-[30%] rounded-3xl">
      <div className="overflow-hidden rounded-md">
        <Image src={nyc} alt="as" title="ОК" width={600} draggable="false" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-black font-bold text-3xl mb-2">Чарты недели</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 xl:grid-cols-4 grid-rows-1 gap-3">
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
          <PlaylistItem />
        </div>
      </div>
    </div>
  );
}

export default Charts;