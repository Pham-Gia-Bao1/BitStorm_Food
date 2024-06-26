// src/components/OrderSide.tsx
import React, { useState, useEffect, useRef } from "react";
import MainLogo from "../logo/MainLogo";
import { Button } from "antd";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import OrderCard from "../card/OrderCard";
import { useTheme } from "next-themes";
import { useCart } from "../context/CartContext";

export default function OrderSide() {
  const [cartVisible, setCartVisible] = useState(false);
  const { theme } = useTheme();
  const cartRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { cart, removeFromCart } = useCart(); // Access cart state and remove method from context

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
      setCartVisible(!cartVisible);
    }
  };

  const handleClose = () => {
    setCartVisible(false);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      cartRef.current &&
      !cartRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      handleClose();
    }
  };

  useEffect(() => {
    if (cartVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [cartVisible]);

  // Remove duplicate products by name
  const uniqueCart = cart.reduce<CartItem[]>((acc, current) => {
    const x = acc.find(item => item.name === current.name);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);

  return (
    <div>
      <Button
        icon={<ShoppingCartIcon />}
        size="large"
        onClick={handleClick}
        ref={buttonRef}
      />
      <div
        ref={cartRef}
        className={`${theme} p-5 gap-2 cart-container ${cartVisible ? 'visible' : ''} pt-2 box-shadow fixed top-16 right-0 bottom-0 h-86 w-96 bg-black mt-2 overflow-y-auto`}
        style={{ maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}
      >
        <div className="h-10">Order</div>
        {uniqueCart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          uniqueCart.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              picture={product.picture}
              name={product.name}
              price={product.price}
              onRemove={removeFromCart} // Pass removeFromCart method
            />
          ))
        )}
      </div>
    </div>
  );
}
