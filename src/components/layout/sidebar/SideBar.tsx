"use client"
import React, { useState } from "react";
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
  const [selected, setSelected] = useState<string>("");

  return (
    <div className="flex bg-primary_color flex-col p-4 items-center   text-white h-full py-4 space-y-8">
      {links.map((link, index) => (
        <Tooltip title={link.title} key={index}>
          <Link href={`/${link.title.toLowerCase()}`} passHref>
            <div
              className={`flex justify-center items-center w-full p-3 rounded cursor-pointer ${
                selected === link.title ? "bg-red-500" : "hover:bg-gray-600"
              }`}
              onClick={() => setSelected(link.title)}
            >
              {link.icon}
            </div>
          </Link>
        </Tooltip>
      ))}
    </div>
  );
};

export default SideBar;
