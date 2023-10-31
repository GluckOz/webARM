import { useRouter } from "next/router";

import { SlHome } from "react-icons/sl"
import { BiSearchAlt } from "react-icons/bi"
import SidebarItem from "./sidebar/SidebarItem";

interface HeaderProps {
	isMobile?: boolean,
}

const Header: React.FC<HeaderProps> = ({ isMobile }) => {
	const router = useRouter();

	const sidebarHeader = [
		{ name: "Главная", icon: SlHome, router: "" },
		{ name: "Поиск", icon: BiSearchAlt, router: "search" }
	]

	const HeaderLinks = [
		{ title: "Топ недели", href: "" },
		{ title: "Плейлист", href: "" },
		{ title: "Новости", href: "" },
		{ title: "Закладки", href: "" },
	]

	return (
		<>
			<header className="shadow-gray shadow-xl">
				<div className="flex flex-col gap-2">
					{sidebarHeader.map((item) => (
						<SidebarItem key={item.name} onClick={() => router.push(`/${item.router}`)}>
							<item.icon size={22} color="gray" />
							<span className={`${isMobile ? 'hidden' : 'span'}`}>{item.name}</span>
						</SidebarItem>
					))}
				</div>
				{/* <div className="flex gap-x-16 gap-y-4 flex-row justify-center items-center">
						{HeaderLinks.map((link, linkElement) => (
							<li key={linkElement}>
								<Link className="text-black text-xl" href={link.href}>
									{link.title}
								</Link>
							</li>
						))}
					</div> */}
			</header>
		</>
	)
}

export default Header;