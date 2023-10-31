import Image from "next/image";
import RecomendationBlock from "./Recomandation";
import Link from "next/link";
import Charts from "./Charts";

const Genres = ["Джаз", "Рок", "Поп", "Латиноамериканская", "Электроника", "Классика", "Фонк"];

const Playlists = () => {
  return (
    <div className="flex flex-row p-4 gap-x-2 gap-y-16 justify-between bg-neutral-950 w-full rounded-md h-[90%]">
      <RecomendationBlock />
      <Charts />
      <div className="flex px-6 pt-6 flex-col border border-black bg-neutral-200 rounded-3xl w-[24%]">
        <h1 className="text-center font-bold text-2xl mb-6">Популярные жанры</h1>
        {Genres.map((genre, genreIndex) => (
          <Link key={genreIndex} href="" className="font-bold text-xl truncate text-black">
            {genre}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Playlists;