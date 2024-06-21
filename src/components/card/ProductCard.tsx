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
import BorderColorIcon from "@mui/icons-material/BorderColor";
import DeleteIcon from "@mui/icons-material/Delete";
import Link from "next/link";

interface ProductCardProps {
  params: Product;
  getData: () => void;
  openModal: (id: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  params,
  getData,
  openModal,
}) => {
  const confirm: PopconfirmProps["onConfirm"] = async (e) => {
    console.log(e);
    await deleteFood(params.id);
    getData();
    message.success("Deleted successfully!");
  };

  const cancel: PopconfirmProps["onCancel"] = (e) => {
    console.log(e);
    message.error("Click on No");
  };

  return (
    <div className="bg-gray-800 p-5 rounded-lg overflow-hidden relative flex flex-col justify-between h-full">
      <Link href={`/settings/products/${params.id}`}>
        <p className="p-2 mb-2 rounded bg-white w-10 flex items-center flex-col text-black">
          {params.id}
        </p>
        {params.picture ? (
          <Image
            src={params.picture}
            width={500}
            height={500}
            alt="Dish"
            className="w-full h-32 object-cover rounded"
          />
        ) : (
          <Image
            src="https://www.eatingwell.com/thmb/m5xUzIOmhWSoXZnY-oZcO9SdArQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/article_291139_the-top-10-healthiest-foods-for-kids_-02-4b745e57928c4786a61b47d8ba920058.jpg"
            width={500}
            height={500}
            alt="Dish"
            className="w-full h-32 object-cover rounded"
          />
        )}

        <h2 className="mt-2 overflow-ellipsis overflow-hidden">
          {params.name}
        </h2>
        <p className="mt-2 overflow-ellipsis overflow-hidden">
          {params.description}
        </p>
        <p className="overflow-ellipsis overflow-hidden">
          ${params.price} • 30 Bowls
        </p>
      </Link>
      <div className="flex gap-2 mt-4 float-end">
        <button
          onClick={() => openModal(params.id)}
          className="px-4 py-2 bg-blue-500 rounded"
        >
          <BorderColorIcon />
        </button>
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this task?"
          onConfirm={confirm}
          onCancel={cancel}
          okText="Yes"
          cancelText="No"
        >
          <button className="px-4 py-2 bg-red-500 rounded">
            <DeleteIcon />
          </button>
        </Popconfirm>
      </div>
    </div>
  );
};

export default ProductCard;
