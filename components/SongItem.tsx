"use client"

import Image from 'next/image';
import React from 'react';
import icon from "@/assets/images/music.png"

export const SongItem = () => {
	return (
		<div className="flex flex-row gap-x-4 items-center">
			<div className="rounded-full overflow-hidden">
				<Image
					className="object-cover"
					src={icon}
					alt="Image Song"
					draggable="false"
					width={50}
					height={50}
				/>
			</div>
			<p className="font-bold text-2xl text-black">Song Name</p>
		</div>
	)
}