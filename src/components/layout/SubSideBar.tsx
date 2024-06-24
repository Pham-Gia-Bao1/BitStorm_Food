// components/SubSidebar.js
import React from "react";
import Link from "next/link";
import { List, ListItem, ListItemText } from "@mui/material";

const SubSidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-700 text-white rounded-lg sub_side">
      <List>
        <ListItem
          button
          className="active:bg-gray-600 p-2 rounded p-4"
          component={Link}
          href="/settings/appearance"
        >
          <ListItemText primary="Appearance" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600 p-2 rounded p-4"
          component={Link}
          href="/settings/restaurant"
        >
          <ListItemText primary="Your Restaurant" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600 p-2 rounded p-4"
          component={Link}
          href="/settings/products"
        >
          <ListItemText primary="Products Management" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600 p-2 rounded p-4"
          component={Link}
          href="/settings/notifications"
        >
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600 p-2 rounded p-4"
          component={Link}
          href="/settings/security"
        >
          <ListItemText primary="Security" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600 p-2 rounded p-4"
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
