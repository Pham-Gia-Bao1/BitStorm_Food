// src/components/OrderCard.tsx
import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
const OrderCard: React.FC<OrderCardProps> = ({ id, picture, name, price, onRemove }) => {
  return (
    <div className="flex items-center p-4 bg-gray-100 rounded-lg m-2">
      <img src={picture} alt={name} className="w-16 h-16 rounded-md mr-4" />
      <div className="flex flex-col flex-grow">
        <h3 className="">{name}</h3>
        <p className="">${price}</p>
      </div>
      <div className="flex flex-col items-center">
        <button onClick={() => onRemove(id)} className="text-red-500 hover:bg-white rounded p-2">
          <DeleteIcon />
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
