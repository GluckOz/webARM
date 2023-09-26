import Link from "next/link";

const Links = [
	{
		title: "Топ недели",
		href: "/charts"
	},
	{
		title: "Плейлист",
		href: "/playlist"
	},
	{
		title: "Новости",
		href: "/news"
	},
	{
		title: "Закладки",
		href: "/liked"
	},
]

export const headerLink = Links.map((link, linkElement) => (
	<li key={linkElement}>
		<Link className="text-black text-xl" href={link.href}>
			{link.title}
		</Link>
	</li>
))