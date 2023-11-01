

import { BiSolidPlaylist } from "react-icons/bi"
import Link from "next/link"
import { useRouter } from "next/router"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";

interface PlaylistItemProps {
	name: string,
	title: string,
	description?: string,
	tracksNum?: number,
	genre?: string,
	// dateCreated?: Date;
	artists?: string[]
}

export const PlaylistItem: React.FC<PlaylistItemProps> = ({ title, description, tracksNum, genre, artists }) => {
	const router = useRouter()

	return (
		<TooltipProvider>
			<Tooltip delayDuration={120}>
				<TooltipTrigger>
					<div className="rounded-3xl overflow-hidden">
						<Link href={`/playlist/${name}`}>
							<BiSolidPlaylist id={title}	className="object-fill"	size={98}/>
						</Link>
					</div>
				</TooltipTrigger>
				<TooltipContent className="p-2 flex flex-col items-start gap-y-1 bg-neutral-900 rounded-md">
					<h3>{title}</h3>
					<p>{description}</p>
					<p>{genre}</p>
					{/* <h3>{dateCreated}</h3> */}
					<p>{tracksNum}</p>
					<p>{artists}</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	)
}