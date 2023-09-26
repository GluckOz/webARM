"use client"

import React from 'react';
import { Button } from './Button';

export const MusicPlayer = () => {
	return (
		<>
			<div className="flex flex-col px-10 mb-4 absolute bottom-0 right-0 left-0">
				<div className="flex flex-row items-center w-[60%] justify-between">
					<p className="px-4 text-xl font-bold">Сейчас играет: .....</p>
					<p className="text-xl font-bold">01:34</p>
				</div>

				<div className="flex-row flex items-center">
					<div className="bg-neutral-400 w-[80%] h-[24px]" >
						<div className="bg-black rounded-r-xl w-[40%] h-[24px]" />
					</div>
					<div className="flex flex-row gap-x-2 ml-2">
						<Button name="Вперёд" />
						<Button name="Запустить" />
						<button className="bg-black text-white px-8 py-2 rounded-xl border border-white hover:bg-white hover:text-black transition hover:border-black">
							Стоп
						</button>
						<Button name="Вперёд" />
					</div>
				</div>

			</div>
		</>
	)
}