import React from "react";
import Settings from "../../../pages/Settings";
import { Metadata } from "next";
import { generateMetadata } from "@/utils";
export const metadata: Metadata = generateMetadata("Settings", "Manage your application settings on BitStorm");
export default function page() {
  return (
    <>
      <Settings />
    </>
  );
}
