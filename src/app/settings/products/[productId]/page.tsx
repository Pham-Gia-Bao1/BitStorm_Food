"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/utils";
import Image from "next/image";
import Loading from "@/components/loading/Loading";
import { useTheme } from "next-themes";
import { useCart } from "@/components/context/CartContext";

const ProductDetail: React.FC<PropductProps> = ({ params }) => {
  const { theme } = useTheme();
  const { addToCart } = useCart(); // Use the addToCart function from context
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const productId = parseInt(params.productId);
    if (isNaN(productId)) {
      setError("Invalid product ID.");
      setLoading(false);
      return;
    }
    getData(productId);
  }, [params.productId]);

  async function getData(productId: number): Promise<void> {
    const apiUrl = `${API_URL}/foods/${productId}`;
    try {
      const response = await axios.get<Product>(apiUrl);
      setProduct(response.data);
      setLoading(false);
    } catch (error) {
      setError("Product does not exist.");
      setLoading(false);
      console.error("Failed to fetch data:", error);
    }
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  const handleBuy = () => {
    console.log("Bought:", product);
  };

  return (
    <main className="flex min-h-screen flex-col bg-white items-center mt-10 justify-between md:container md:mx-auto">
      <div className={`${theme} ml-4 h-50 w-full p-4 rounded-lg`}>
        {loading && (
          <div className="detail flex gap-4 w-full h-full p-4 rounded-lg">
            <Loading />
          </div>
        )}
        {error && <div>{error}</div>}
        {product && (
          <div className={`${theme} mt-10 ml-10 shadow-md detail flex gap-4 w-full h-full p-4 rounded-lg`}>
            <Image
              width={500}
              height={500}
              src={product.picture}
              alt={product.name}
              className="detail-image w-3/6 h-3/6 object-cover rounded-lg"
            />
            <div className="detail-content">
              <h3 className="detail-title text-2xl font-semibold mb-2">
                Name: {product.name}
              </h3>
              <p className="detail-description mb-2">
                Description: {product.description}
              </p>
              <p className="detail-price text-lg font-medium">
                Price: ${product.price}
              </p>
              <p className="detail-type text-lg">
                Type: {product.type}
              </p>
              <div className="mt-4">
                <button
                  onClick={handleAddToCart}
                  className="mr-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition duration-200"
                >
                  Add to Cart
                </button>
                <button
                  onClick={handleBuy}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition duration-200"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
