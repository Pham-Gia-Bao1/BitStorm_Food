// components/SubSidebar.js
import React from "react";
import Link from "next/link";
import { List, ListItem, ListItemText } from "@mui/material";
import { useTheme } from "next-themes";
const SubSidebar = () => {
  const { theme } = useTheme();
  return (
    <div className={`${theme} w-64 h-full pt-10 z-20 rounded-lg sub_side box-shadow`}>
      <List>
        <ListItem
          button
           className="hover:bg-gray-600  rounded p-4"
          component={Link}
          href="/settings/appearance"
        >
          <ListItemText primary="Appearance" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600  rounded p-4"
          component={Link}
          href="/settings/restaurant"
        >
          <ListItemText primary="Your Restaurant" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600  rounded p-4"
          component={Link}
          href="/settings/products"
        >
          <ListItemText primary="Products Management" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600  rounded p-4"
          component={Link}
          href="/settings/notifications"
        >
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600  rounded p-4"
          component={Link}
          href="/settings/security"
        >
          <ListItemText primary="Security" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600  rounded p-4"
          component={Link}
          href="/settings/about"
        >
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
    </div>
  );
};
export default SubSidebar;
