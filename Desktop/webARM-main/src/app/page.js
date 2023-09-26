"use client"

import Image from 'next/image';
import Header from '@/components/Header';
import Nyc from "@/assets/images/nyc.jpg";

import { Button } from '@/components/UI/Button';
import { PlaylistItem } from '@/components/UI/PlaylistItem';
import { SongItem } from './components/SongItem';
import Link from 'next/link';
import { MusicPlayer } from '@/components/UI/MusicPlayer';

const Genres = ["Джаз", "Рок", "Поп", "Латиноамериканская", "Электроника", "Классика", "Фонк"];

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col pt-28 py-8 gap-x-4 gap-y-16 justify-between min-h-screen">
        <div className="flex flex-col md:flex-row px-10">

          <div className="flex p-6 flex-col border border-black bg-white rounded-3xl w-[46%] gap-y-2">
            <SongItem />
            <SongItem />
            <SongItem />
            <SongItem />
          </div>

          <div className="flex px-6 flex-col border-black items-start mt-6 w-[30%]">
            <div className="overflow-hidden rounded-md mb-4">
              <Image src={Nyc} alt="as" title="ОК" width={600} draggable="false" />
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

          <div className="flex p-6 pt-6 flex-col border border-black bg-neutral-200 rounded-3xl w-[24%]">
            <h1 className="text-center font-bold text-2xl mb-6">Популярные жанры</h1>
            {Genres.map((genre, genreIndex) => (
              <Link key={genreIndex} href="" className="font-bold text-xl truncate text-black hover:underline hover:underline-offset-4">{genre}</Link>
            ))}
          </div>
        </div>
                
        {/* <hr className="border border-black"/> */}
        <MusicPlayer/>
      </div>
    </>
  )
}