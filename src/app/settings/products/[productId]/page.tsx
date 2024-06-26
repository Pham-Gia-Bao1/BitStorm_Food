"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "@/utils";
import Image from "next/image";
import Loading from "@/components/loading/Loading";
import { useTheme } from "next-themes";
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  type: string;
  picture: string;
};
type Props = {
  params: {
    productId: string;
  };
};
const ProductDetail: React.FC<Props> = ({ params }) => {
  const { theme } = useTheme();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true); // Added loading state
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    const productId = parseInt(params.productId);
    if (isNaN(productId)) {
      setError("Invalid product ID.");
      setLoading(false); // Set loading to false if there's an error
      return;
    }
    getData(productId);
  }, [params.productId]);

  async function getData(productId: number): Promise<void> {
    const apiUrl = `${API_URL}/foods/${productId}`;

    try {
      const response = await axios.get<Product>(apiUrl);
      setProduct(response.data);
      setLoading(false); // Set loading to false after successful data fetch
    } catch (error) {
      setError("Product does not exist.");
      setLoading(false); // Set loading to false on error
      console.error("Failed to fetch data:", error);
    }
  }

  return (
    <main className="flex min-h-screen flex-col bg-white items-center mt-10 justify-between md:container md:mx-auto">
      <div className={`${theme} -1 ml-4 h-50 w-full p-4 rounded-lg`}>
        {loading && (
          <div className="detail flex gap-4 w-full  h-full p-4 rounded-lg">
            <Loading />
          </div>
        )}
        {error && <div>{error}</div>}
        {product && (
          <div className={`${theme} mt-10 ml-10 shadow-md detail flex gap-4 w-full -50 h-full p-4 rounded-lg`}>
            <Image
              width={500}
              height={500}
              src={product.picture}
              alt={product.name}
              className="detail-image w-3/6 h-3/6 object-cover rounded-lg"
              />
            <div className="detail-content">
              <h3 className="detail-title text-2xl  font-semibold mb-2">
                Name: {product.name}
              </h3>
              <p className="detail-description  mb-2">
                Description: {product.description}
              </p>
              <p className="detail-price text-lg  font-medium">
                Price: ${product.price}
              </p>
              <p className="detail-type text-lg ">
                Type: {product.type}
              </p>
            </div>
          </div>
        )}
      </div>
    </main>
  );
};

export default ProductDetail;
