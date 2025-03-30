"use client";
import React from "react";
import SidebarItem from "../molecules/SidebarItem";
import { FaHome, FaChartLine, FaCog } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-gray-900 text-white flex flex-col p-4">
      <h1 className="text-2xl font-bold text-center mb-6">Expense Tracker</h1>
      <SidebarItem icon={<FaHome />} text="Dashboard" />
      <SidebarItem icon={<FaChartLine />} text="Predictions" />
      <SidebarItem icon={<FaCog />} text="Settings" />
    </div>
  );
};

export default Sidebar;
