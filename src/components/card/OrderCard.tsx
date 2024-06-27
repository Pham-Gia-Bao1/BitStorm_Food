// src/components/OrderCard.tsx
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Image from "next/image";
const OrderCard: React.FC<OrderCardProps> = ({
  id,
  picture,
  name,
  price,
  onRemove,
}) => {
  return (
    <div className="flex items-center p-4 bg-gray-100 rounded-full m-2 relative pl-14">
      <div className="absolute -left-3 bg-orange-400 p-2 m-3 rounded-full flex items-center justify-center">
       1X
      </div>
      <Image
        src={picture}
        alt={name}
        className="w-16 h-16 rounded-md mr-4"
        width={500}
        height={500}
      />
      <div className="flex flex-col flex-grow">
        <h3 className="">{name}</h3>
        <p className="">${price}</p>
      </div>
      <div className="flex flex-col items-center">
        <button
          onClick={() => onRemove(id)}
          className="text-red-500 hover:bg-white rounded p-2"
        >
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
