import { SiApplemusic } from "react-icons/si"

interface SongItemProps {
	trackName: string,
	artist: string,
	isFeat?: boolean
}

export const SongItem: React.FC<SongItemProps> = ({trackName, artist, isFeat}) => {
	return (
		<div className="flex flex-row gap-x-2 items-center bg-neutral-700 hover:bg-neutral-600 transition p-2 cursor-pointer rounded-md">
			<div className="rounded-full overflow-hidden bg-neutral-700 p-2">
				<SiApplemusic size={42} />
			</div>
			<div className="flex flex-col">
				<p className="text-2xl text-neutral-800 dark:text-neutral-200">{trackName}</p>
				<p className="text-xl text-neutral-700 dark:text-neutral-400">{artist}</p>
				{isFeat && (
					<p>&nbsp;feat.&nbsp; {artist}</p>
				)}
			</div>
		</div>
	)
}