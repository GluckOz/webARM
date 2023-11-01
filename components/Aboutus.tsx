import { useRouter } from "next/router";

import {
  BookHeadphones,
  MoreHorizontal
} from "lucide-react";
import { MdPolicy } from "react-icons/md"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@radix-ui/react-tooltip";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@radix-ui/react-dropdown-menu";

interface AboutusPanelProps {
  isMobile?: boolean
}

const AboutusPanel: React.FC<AboutusPanelProps> = ({ isMobile }) => {
  const router = useRouter();

  const listElement = [
    { name: "О нас", href: "about", icon: BookHeadphones },
    { name: "Конфиденциальность", href: "policy", icon: MdPolicy }
  ]

  return (
    <>
      <div className={`${isMobile ? 'hidden' : 'flex'} flex-row gap-x-2 w-full justify-end`}>
        {listElement.map((item) => (
          <TooltipProvider key={item.name}>
            <Tooltip delayDuration={100}>
              <TooltipTrigger>
                <item.icon
                  size="22"
                  className="fill-neutral-400 hover:fill-neutral-600 transition"
                  onClick={() => router.push(`/${item.href}`)}
                />
              </TooltipTrigger>
              <TooltipContent className="-top-2 relative bg-neutral-800 rounded-md p-2">
                <span className="text-neutral-200 text-base">{item.name}</span>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
      <div className={`${isMobile ? 'flex' : 'hidden'} flex-row gap-x-2 w-full justify-center`}>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <MoreHorizontal size="22" color="white" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="z-10 -top-2 relative bg-neutral-800 rounded-md p-2 flex flex-col gap-y-2">
            {listElement.map((item) => (
              <DropdownMenuItem key={item.name}>
                <span onClick={() => router.push(`/${item.href}`)} className="text-neutral-200 text-base cursor-pointer">
                  {item.name}
                </span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

export default AboutusPanel;