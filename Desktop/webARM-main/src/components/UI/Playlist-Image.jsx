"use client"

import nyc from "@/assets/images/nyc.jpg"
import Image from "next/image"

export const PlaylistImage = ({ image, alt }) => {
	return (
		<>
			<div className="rounded-xl overflow-hidden">
				<Image src={image} alt={alt} width={136} height={136} draggable="false" />
			</div>
		</>
	)
}