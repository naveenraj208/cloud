import React from "react";

interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3 p-3 hover:bg-gray-700 rounded cursor-pointer transition-all">
      {icon}
      <span className="text-lg">{text}</span>
    </div>
  );
};

export default SidebarItem;
