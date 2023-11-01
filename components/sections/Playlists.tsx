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
      <div className="flex px-6 pt-6 flex-col border border-neutral-700 bg-neutral-800 rounded-3xl w-[24%]">
        <h1 className="text-center font-bold text-2xl mb-6 text-neutral-700 dark:text-neutral-200">Популярные жанры</h1>
        {Genres.map((genre, genreIndex) => (
          <Link key={genreIndex} href="" className="font-bold text-2xl truncate text-neutral-600 dark:text-neutral-400 hover:underline">
            {genre}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Playlists;