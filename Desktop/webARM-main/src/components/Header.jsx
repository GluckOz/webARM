"use client"

import React from "react";
import { useState, useRef, useEffect } from "react";
import { headerLink } from "@/share/HeaderLinks"
import Link from "next/link";
import { useRouter } from "next/navigation";

export const metadata = {
	title: "Меню"
}

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const router = useRouter();

	return (
		<>
			<header className={`hidden md:block absolute top-0 py-6 right-0 left-0 bg-white px-4 md:px-16 shadow-gray shadow-xl`}>
				<div className="flex flex-row items-center justify-between">
					<div className="flex flex-row items-center">
						<Link
							className={router.pathname == "/" ? 'text-3xl text-black mx-2 font-bold' : 'text-3xl text-black mx-2'}
							href="/"
						>
							{metadata.title}
						</Link>
					</div>
					<div className="flex gap-x-16 gap-y-4 flex-row justify-center items-center">
						{headerLink}
						<button className="
						bg-black 
						text-xl 
						rounded-xl 
						px-8 
						py-2 
					text-white 
						border
					hover:bg-white 
					hover:text-black
						hover:border-black
						transition
						ease-in
						"
						>
							Вход
						</button>
					</div>
				</div>
			</header>
			<header className={`md:hidden relative top-0 py-6 right-0 left-0 bg-white px-4 md:px-16 shadow-gray shadow-xl`}>
				<div className="mobile_header md:hidden flex items-center justify-center">
					<button
						onClick={() => setIsOpen(true)}
						className={isOpen ? 'hidden' : 'text-5xl transition duration-150 hover:rotate-180 hover:text-red-700'}>
						+
					</button>
					<button
						onClick={() => setIsOpen(false)}
						className={isOpen ? 'text-5xl transition duration-150 hover:rotate-180 hover:text-red-700' : 'hidden'}>
						-
					</button>
				</div>
				<div className={
					isOpen ? 'flex flex-col absolute top-0 min-h-screen'
						: 'flex flex-col absolute min-h-screen border border-red-700'}
				>
					{headerLink}
				</div>
			</header>
		</>
	)
}

export default Header;