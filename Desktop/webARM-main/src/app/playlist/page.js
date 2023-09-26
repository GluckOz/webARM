import Image from 'next/image'
import Header from '@/components/Header'
import music from "@/assets/images/music.png"
import { MusicPlayer } from '@/components/UI/MusicPlayer'

export const playlistItem = [
	{
		id: 1,
		songNumber: 10,
		genre: "Хип-Хоп",
		icon: music,
		artists: "Электро, Мармелад"
	},
	{
		id: 2,
		songNumber: 4,
		genre: "EDM",
		icon: music,
		artists: "Ы"
	},
	{
		id: 3,
		songNumber: 7,
		genre: "Поп",
		icon: music,
		artists: "Ы"
	},
	{
		id: 4,
		songNumber: 2,
		genre: "Фонк",
		icon: music,
		artists: "Ы"
	},
	{
		id: 4,
		songNumber: 2,
		genre: "Фонк",
		icon: music,
		artists: "Ы"
	},
	{
		id: 4,
		songNumber: 2,
		genre: "Фонк",
		icon: music,
		artists: "Ы"
	},
	{
		id: 4,
		songNumber: 2,
		genre: "Фонк",
		icon: music,
		artists: "Ы"
	},
	{
		id: 4,
		songNumber: 2,
		genre: "Фонк",
		icon: music,
		artists: "Ы"
	},
]

export default function Playlist() {
	return (
		<>
			<Header />
			<div className="flex min-h-screen pt-28 py-8 flex-col gap-y-4 items-center text-black px-10">
				<h1 className="text-5xl font-bold">Чарты недели</h1>
				<div className="grid grid-rows-4 grid-cols-2 gap-x-8 gap-y-6 bg-neutral-300 rounded-3xl p-6 min-w-[90%]">
					{playlistItem.map((playlist) => (
						<div key={playlist.id} className="flex flex-row gap-x-4 items-center">
							<Image className="rounded-3xl" src={playlist.icon} width={128} height={128} alt={playlistItem} draggable="true" />
							<div className="flex flex-col text-lg bg-neutral-400 p-5 rounded-2xl w-[600px]">
								<p>Кол-во песен: {playlist.songNumber}</p>
								<p>Жанр: {playlist.genre}</p>
								<p>Исполнители: {playlist.artists}</p>
							</div>
						</div>
					))}
				</div>
				<hr className="border border-black"/>
        <MusicPlayer/>
			</div>
		</>
	)
}