import React from 'react'
import { useTheme } from "next-themes";
export default function NotFound() {
  const { theme } = useTheme();
  return (
    <main className="flex flex-col items-center justify-betwee h-full">
    <div className={`${theme} flex-1 p-6  w-full h-full`}>
      <h1 className="text-2xl mb-4">Settings</h1>
      <div className="flex">
        <div className="flex-1 ml-4 p-4 rounded-lg">
          <h1>Not found</h1>
        </div>
      </div>
    </div>
  </main>
  )
}
