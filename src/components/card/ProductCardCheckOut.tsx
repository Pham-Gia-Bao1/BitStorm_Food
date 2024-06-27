import React from 'react';
import { Button, IconButton } from '@mui/material';
import { Add, Remove } from '@mui/icons-material';
import Image, { StaticImageData } from 'next/image';

interface ProductCardCheckOutProps {
  imageSrc: StaticImageData | string;
  title: string;
}

const ProductCardCheckOut: React.FC<ProductCardCheckOutProps> = ({ imageSrc, title }) => {
  const [quantity, setQuantity] = React.useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="box-shadow flex items-center justify-between p-4 bg-white rounded-lg mb-4">
      <div className="flex items-center h-14">
        <Image src={imageSrc} alt={title} width={100} height={100} className="rounded-full" />
        <span className="ml-4 text-xl font-bold text-black">{title}</span>
      </div>
      <div className="flex items-center">
        <IconButton onClick={handleDecrement}>
          <Remove />
        </IconButton>
        <span className="mx-2 text-lg text-black">{quantity}</span>
        <IconButton onClick={handleIncrement}>
          <Add />
        </IconButton>
      </div>
    </div>
  );
};

export default ProductCardCheckOut;
