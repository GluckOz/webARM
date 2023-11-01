import { useEffect, useState } from 'react';

import TrackAvatar from './track/TrackAvatar';
import asaprocky from "@/assets/images/m1000x1000.jpg"
import TrackArtist from './track/TrackArtist';
import { Progress } from "@/components/ui/progress"
import { BsFillPlayFill, BsFillStopFill, } from "react-icons/bs"
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"

export const MusicPlayer = () => {
	const [progress, setProgress] = useState(13)

	useEffect(() => {
		const timer = setTimeout(() => setProgress(96), 500)
		return () => clearTimeout(timer)
	}, [])

	return (
		<div className="flex flex-row p-2 absolute bottom-0 right-0 left-0 bg-black z-2 h-[10%] w-full items-center justify-start gap-x-4">
			<div className="flex flex-row items-center justify-start gap-x-4 w-1/4">
				<TrackAvatar alt="1" src={asaprocky} title='1' />
				<TrackArtist artist='ASAP ROCKY' trackname='Everyday' />
			</div>
			<div className="flex flex-col justify-center items-center gap-y-2 w-1/2">
				<div className="flex flex-row gap-x-2 items-center justify-center">
					<BiSkipPrevious size={32} />
					<BsFillPlayFill size={32} />
					<BsFillStopFill size={32} />
					<BiSkipNext size={32} />
				</div>
				<div className="flex flex-row items-center gap-x-2 h-[12px] w-1/2 mb-2">
					<p>03:01</p>
					<Progress value={progress} className="bg-neutral-600 rounded-md h-[12px] cursor-pointer" />
					<p>03:24</p>
				</div>
			</div>
		</div>
	)
}