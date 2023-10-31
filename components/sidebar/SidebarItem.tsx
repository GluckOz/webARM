interface SidebarItemProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({children, onClick}) => {
  return ( 
    <div onClick={onClick} className="flex flex-row gap-x-2 bg-neutral-700 hover:bg-neutral-600 transition p-2 rounded-md text-neutral-200 cursor-pointer items-center">
      {children}
    </div>
   );
}
 
export default SidebarItem;