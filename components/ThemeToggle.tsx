import { SwiperHandle } from "@/components//ui/swiperhandle";
import { useTheme } from "next-themes";
import { SunMoon } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

const ThemeToggle = () => {
    const { setTheme, theme } = useTheme();

    return (
        <SwiperHandle type="circle">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <SunMoon size={22} className={`${theme === "white" ? 'fill-neutral-200 bg-neutral-700' : ''} ${theme === "dark" ? 'fill-neutral-700 bg-neutral-200' : ''}`} />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuItem
                        className="bg-neutral-700 hover:bg-neutral-600 transition p-2 rounded-md text-neutral-200 cursor-pointer"
                        onClick={() => setTheme("dark")}
                    >
                        Тёмная
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="bg-neutral-700 hover:bg-neutral-600 transition p-2 rounded-md text-neutral-200 cursor-pointer"
                        onClick={() => setTheme("white")}
                    >
                        Светлая
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </SwiperHandle>
    );
}

export default ThemeToggle;