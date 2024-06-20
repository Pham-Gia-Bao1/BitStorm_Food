// components/ProductCard.js
import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
import { Edit as EditIcon } from "@mui/icons-material";
import Image from "next/image";
import { Popconfirm, PopconfirmProps, message } from "antd";
import { deleteFood } from "@/api";

const ProductCard = ({ params, getData }: ProductCardProps) => {
  const confirm: PopconfirmProps["onConfirm"] = async (e) => {
    console.log(e);
    await deleteFood(params.id); // Wait for deleteFood to complete
    getData(); // Fetch updated data
    message.success("Deleted successfully!");
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <p className="p-2 mb-2 rounded bg-white w-10 flex items-center flex-col text-black">
        {params.id}
      </p>
      <Image
        src={params.picture}
        width={500}
        height={500}
        alt="Dish 2"
        className="w-full h-32 object-cover rounded"
      />
      <h2 className="mt-2">{params.name}</h2>
      <p className="mt-2">{params.description}</p>
      <p>${params.price} • 30 Bowls</p>
      <div className="flex gap-2">
        <button className="mt-2 px-4 py-2 bg-blue-500 rounded">
          Update dish
        </button>
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <button className="mt-2 px-4 py-2 bg-red-500 rounded">
            Delete dish
          </button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default ProductCard;
