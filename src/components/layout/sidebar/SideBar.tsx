// src/components/SideBar.tsx
import React from "react";
import {
  Store,
  Home,
  FlashOn,
  PieChart,
  Email,
  Notifications,
  Settings,
  ExitToApp,
} from "@mui/icons-material";
import { Tooltip, IconButton } from "@mui/material";
import Link from "next/link";

const links = [
  { title: "Store", icon: <Store /> },
  { title: "Home", icon: <Home /> },
  { title: "Flash", icon: <FlashOn /> },
  { title: "Statistics", icon: <PieChart /> },
  { title: "Mail", icon: <Email /> },
  { title: "Notifications", icon: <Notifications /> },
  { title: "Settings", icon: <Settings /> },
  { title: "Logout", icon: <ExitToApp /> },
];

const SideBar: React.FC = () => {
  return (
    <div className="flex flex-col p-7  items-center bg-gray-900 text-white h-full py-4 space-y-10">
      {links.map((link, index) => (
        <Tooltip className="hover:bg-gray-600" title={link.title} key={index}>
          <Link className="hover:bg-gray-600" href={`/${link.title.toLowerCase()}`} passHref>
            {link.icon}
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};

export default SideBar;
