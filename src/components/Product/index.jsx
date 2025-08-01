import { addToCart, updateCartData } from "@/lib/features/cartSlice";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const ProductComp = () => {
  const [productData, setProductData] = useState(null);
  const dispatch = useDispatch();
  const { id } = useParams();

  const handleCartClick = (data) => {
    const cartData = JSON.parse(sessionStorage.getItem("cartData")) || [];

    const index = cartData.findIndex((item) => item.id === data.id) || -1;
    if (index >= 0) {
      dispatch(updateCartData({ id: data.id, act: "inc" }));
      return;
    }

    dispatch(addToCart({ ...data, count: 1 }));
  };

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const product = await res.json();
        setProductData(product);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };

    fetchData();
  }, [id]);

  if (!productData) {
    return (
      <div className="text-center mt-10 text-gray-500 dark:text-gray-300">
        Loading product details...
      </div>
    );
  }

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4 relative">
              {productData?.images?.[0] ? (
                <Image
                  src={productData.images[0]}
                  alt={productData.title || "Product Image"}
                  fill
                  className="object-cover rounded-lg"
                  priority
                />
              ) : (
                <div className="flex items-center justify-center h-full text-gray-600">
                  No image available
                </div>
              )}
            </div>
          </div>

          <div className="md:flex-1 px-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              {productData.title}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
              Category: {productData.category}
            </p>
            <div className="flex mb-4">
              <div className="mr-4">
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Price:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  ${productData.price}
                </span>
              </div>
              <div>
                <span className="font-bold text-gray-700 dark:text-gray-300">
                  Availability:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {productData.stock > 0 ? "In Stock" : "Out of Stock"}
                </span>
              </div>
            </div>
            <div>
              <span className="font-bold text-gray-700 dark:text-gray-300">
                Product Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                {productData.description}
              </p>
            </div>
            <div className="mt-8 w-1/2 ">
              <button
                onClick={() => handleCartClick(productData)}
                className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductComp;
