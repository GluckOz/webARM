import Image from "next/image"

import musicIcon from "@/assets/images/music.png"
import Link from "next/link"

export const PlaylistItem = () => {
	return (
		<div className="rounded-3xl overflow-hidden">
			<Link href="">
				<Image className="object-fill" src={musicIcon} alt="Playlist" width={136} height={136} draggable="false" />
			</Link>
		</div>
	)
}