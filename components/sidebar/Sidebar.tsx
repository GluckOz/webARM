import { useEffect, useRef, useState } from "react";
import { useContainerDimensions } from "@/hooks/useContainerDimensions";
// import { useDimensions } from "@/hooks/useDimensions";

import Header from "../Header";
import interact from "interactjs"
import { PiHandSwipeLeftLight, PiHandSwipeRightLight } from "react-icons/pi"
import { SwiperHandle } from "../ui/swiperhandle";
import SidebarMedia from "./SidebarMedia";
import Aboutus from "../Aboutus";
import SidebarToolsPanel from "./SidebarToolsPanel";

const Sidebar = () => {
  // const ref = useRef(null)
  // const {width} = useDimensions(ref)
  const [isOpenMobile, setIsOpenMobile] = useState(false);

  useEffect(() => {
    interact('.resizable')
      .resizable({
        edges: { left: true, right: true },

        listeners: {
          move: function (e) {
            let { x } = e.target.dataset

            x = (parseFloat(x) || 0) + e.deltaRect.left

            Object.assign(e.target.style, {
              width: `${e.rect.width}px`,
              transform: `translate(${x}px)`
            })

            Object.assign(e.target.dataset, { x })
          }
        }
      })
  }, []);

  return (
    <>
     { /* Desktop Sidebar */ }
      <div className={`${isOpenMobile ? 'hidden' : 'flex'} 
      resizable min-w-[140px] max-w-[440px] w-[300px] justify-between p-2 h-[90%] bg-whitedefaultBackground dark:bg-darkdefaultBackground 
      flex flex-col gap-y-6 rounded-md border border-neutral-600`}>
        <Header />
        <div className="flex flex-row gap-x-2 items-center">
          <SwiperHandle type="circle">
            <PiHandSwipeLeftLight
              className="fill-neutral-100 hover:fill-neutral-400"
              size={22}
              onClick={() => setIsOpenMobile(true)}
            />
          </SwiperHandle>
          <SidebarToolsPanel />
        </div>
        <SidebarMedia />
        <Aboutus />
      </div>

      { /* Mobile Sidebar */ }
      <div className={`${isOpenMobile ? 'flex' : 'hidden'} 
      w-[54px] p-2 h-[90%] bg-neutral-950 justify-between flex-col gap-y-6 items-center border border-neutral-600`}>
        <Header isMobile />
        <div className="flex flex-row gap-x-2 items-center">
          <SwiperHandle type="circle">
            <PiHandSwipeLeftLight
              className="fill-neutral-100 hover:fill-neutral-400"
              size={22}
              onClick={() => setIsOpenMobile(false)}
            />
          </SwiperHandle>
        </div>
        <SidebarMedia />
        <Aboutus isMobile />
      </div>
    </>
  );
}

export default Sidebar;