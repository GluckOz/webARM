import Image from "next/image";
import { PlaylistItem } from "@/components/PlaylistItem";
import nyc from "@/assets/images/nyc.jpg"

const Charts = () => {
  const playlistList = [
    {
      name: "рандом",
      title: "рандом",
      description: "рандом",
      genre: "рандом",
      trackNum: 2
    },
    {
      name: "рандом",
      title: "рандом",
      description: "рандом",
      genre: "рандом",
      trackNum: 2
    },
    {
      name: "рандом",
      title: "рандом",
      description: "рандом",
      genre: "рандом",
      trackNum: 2
    },
    {
      name: "рандом",
      title: "рандом",
      description: "рандом",
      genre: "рандом",
      trackNum: 2
    },
    {
      name: "рандом",
      title: "рандом",
      description: "рандом",
      genre: "рандом",
      trackNum: 2
    },
    {
      name: "рандом",
      title: "рандом",
      description: "рандом",
      genre: "рандом",
      trackNum: 2
    },
  ]

  return (
    <div className="flex p-6 flex-col justify-between border border-neutral-700 bg-neutral-800 items-start w-[30%] rounded-3xl">
      <div className="overflow-hidden rounded-md">
        <Image src={nyc} alt="as" title="ОК" width={600} draggable="false" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-neutral-700 dark:text-neutral-200 font-bold text-3xl mb-2">Чарты недели</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gird-cols-3 xl:grid-cols-4 grid-rows-1 gap-3">
          {playlistList.map((item) => (
            <PlaylistItem name={item.name} title={item.title} description={item.description} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Charts;