// components/SubSidebar.js
import React from "react";
import Link from "next/link";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import {
  Home as HomeIcon,
  Restaurant as RestaurantIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  Info as InfoIcon,
  LocalOffer as LocalOfferIcon,
} from "@mui/icons-material";

const SubSidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-700 p-4 text-white rounded-lg">
      <List>
        <ListItem
          button
          className="active:bg-gray-600 p-2 rounded"
          component={Link}
          href="settings/appearance"
        >
          <ListItemText primary="Appearance" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600 p-2 rounded"
          component={Link}
          href="settings/restaurant"
        >
          <ListItemText primary="Your Restaurant" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600 p-2 rounded"
          component={Link}
          href="settings/products"
        >
          <ListItemText primary="Products Management" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600 p-2 rounded"
          component={Link}
          href="settings/notifications"
        >
          <ListItemText primary="Notifications" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600 p-2 rounded"
          component={Link}
          href="settings/security"
        >
          <ListItemText primary="Security" />
        </ListItem>
        <ListItem
          button
          className="hover:bg-gray-600 p-2 rounded"
          component={Link}
          href="settings/about"
        >
          <ListItemText primary="About Us" />
        </ListItem>
      </List>
    </div>
  );
};

export default SubSidebar;
