"use client";
import React from "react";
import BannerTopImage from "../../../../assets/images/BannerTop.png";
import ShopImage1 from "../../../../assets/images/Group 16.png";
import ShopImage2 from "../../../../assets/images/Group 17.png";
import ShopImage3 from "../../../../assets/images/Group 18.png";
import ShopImage4 from "../../../../assets/images/Group 19.png";
import ShopImage5 from "../../../../assets/images/Group 20.png";
import ShopImage6 from "../../../../assets/images/Group 21.png";
import Image from "next/image";
import ProductCardCheckOut from "@/components/card/ProductCardCheckOut";
import { useCart } from "@/components/context/CartContext";
import { useTheme } from "next-themes";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Footer from "@/components/layout/Footer";

const shops = [
  ShopImage1,
  ShopImage2,
  ShopImage3,
  ShopImage4,
  ShopImage5,
  ShopImage6,
];

export default function Page() {
  const { cart, removeFromCart } = useCart();
  const { theme } = useTheme();
  const uniqueCart = cart.reduce<CartItem[]>((acc, current) => {
    const x = acc.find((item) => item.name === current.name);
    if (!x) {
      return acc.concat([current]);
    } else {
      return acc;
    }
  }, []);
  return (
    <main
      className={`${theme} flex flex-col items-center justify-between h-full min-h-screen`}
    >
      <div className="flex-1 p-6 w-full h-full">
        <h1 className="text-2xl mb-4">Settings</h1>
        <div className="flex">
          <div className="flex-1 ml-4 p-4 rounded-lg">
            <h1></h1>
            <div>
              <div>
                <Image
                  width={2000}
                  height={1000}
                  src={BannerTopImage}
                  alt="Top banner"
                />
              </div>
              <div className="mt-2">
                {uniqueCart.length === 0 ? (
                  <p>Order list are empty.</p>
                ) : (
                  uniqueCart.map((product) => (
                    <ProductCardCheckOut
                      key={product.id}
                      imageSrc={product.picture}
                      title={product.name}
                    />
                  ))
                )}
              </div>
              <Link
                href="/settings/products/checkout"
                passHref
                className="w-full"
              >
                <button className="rounded bg-green-600 h-full w-full flex items-center justify-center gap-5 p-4 hover:bg-green-700 transition-all duration-300 shadow-md hover:shadow-lg">
                  <span className="flex justify-center items-center bg-white rounded-full p-2 shadow-inner">
                    <ArrowForwardIcon className="text-green-600" />
                  </span>
                  <p className="text-2xl text-white font-semibold">Pay</p>
                </button>
              </Link>
              <div className="flex items-center gap-2 m-5 ml-0 justify-evenly">
                {shops.map((value, index) => (
                  <Image
                    key={index}
                    width={150}
                    height={150}
                    src={value}
                    alt="shop image"
                  />
                ))}
              </div>
              <div>
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
