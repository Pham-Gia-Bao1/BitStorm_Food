import React, { useState, useEffect, useRef } from "react";
import MainLogo from "../logo/MainLogo";
import { Button } from "antd";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import OrderCard from "../card/OrderCard";
import { useTheme } from "next-themes";
import { useCart } from "../context/CartContext";
import ShoppingBasketImage from "../../assets/images/Full Shopping Basket.png";
import Image from "next/image";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Link from "next/link";


export default function OrderSide() {
  const [cartVisible, setCartVisible] = useState(false);
  const { theme } = useTheme();
  const cartRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { cart, removeFromCart } = useCart(); // Access cart state and remove method from context

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current && buttonRef.current.contains(event.target as Node)) {
      setCartVisible(!cartVisible);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      cartRef.current &&
      !cartRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setCartVisible(false);
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
    const x = acc.find((item) => item.name === current.name);
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
        className={`${theme} cart-container ${
          cartVisible ? "visible" : ""
        } box-shadow fixed top-16 right-0 bottom-0 h-86 w-96 mt-2 overflow-y-auto flex flex-col`}
        style={{ maxHeight: "calc(100vh - 4rem)", overflowY: "auto" }}
      >
        <div className="h-24 bg-green-600 w-full flex items-center justify-center flex-wrap">
          <section className="w-1/4 flex items-center p-2 justify-center">
            <Image
              width={500}
              height={500}
              src={ShoppingBasketImage}
              alt="Order image"
              className="w-16 h-16 rounded-md"
            />
          </section>
          <section className="w-2/4 flex items-center p-2 justify-center text-3xl font-bold text-white">
            My Basket
          </section>
        </div>
        <div className={`p-4 pt-0 h-96 overflow-scroll ${theme}`}>
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
        <div className="absolute bottom-0 bg-slate-100 w-full flex items-center justify-center gap-1 flex-col h-40">
          <section className="w-full flex items-center justify-around gap-3 h-12">
            <p className="font-bold border-r-2 h-full flex items-center justify-center w-1/2">
              Total:
            </p>
            <p className="font-bold w-1/2 flex items-center justify-center">
              £127.90
            </p>
          </section>
          <section className="w-full flex items-center justify-around gap-3 h-12">
            <p className="font-bold border-r-2 h-full flex items-center justify-center w-1/2">
              Delivery Fee:
            </p>
            <p className="font-bold w-1/2 flex items-center justify-center">
              2.50
            </p>
          </section>
          <Link href="/settings/products/checkout" passHref>

              <button className="rounded bg-green-600 h-full w-full flex items-center justify-center gap-5">
                <span className="flex justify-center items-center bg-white rounded-lg ml-10">
                  <ArrowForwardIcon />
                </span>
                <p className="w-full bg-green-600 text-2xl">Checkout</p>
              </button>

          </Link>
        </div>
      </div>
    </div>
  );
}
