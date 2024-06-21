import { Skeleton } from '@mui/material'
import React from 'react'

export default function SkeletonCard() {
  return (
    <div className="flex flex-col  bg-gray-800 p-5 rounded-lg overflow-hidden gap-1.5">
    <Skeleton
      animation="wave"
      variant="rectangular"
      width={41}
      height={41}
    />
    <Skeleton
      animation="wave"
      variant="rectangular"
      width={320}
      height={130}
    />
    <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
    <Skeleton variant="text" sx={{ fontSize: "1.5rem" }} />
    <Skeleton
      variant="text"
      sx={{ fontSize: "1.5rem" }}
      width="60%"
    />
    <div className="flex gap-2 mt-4 float-end">
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={55}
        height={45}
      />
      <Skeleton
        animation="wave"
        variant="rectangular"
        width={55}
        height={45}
      />
    </div>
  </div>
  )
}
