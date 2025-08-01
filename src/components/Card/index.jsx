import Image from "next/image";
import React from "react";
import InfoCard from "./InfoCard";
import { usePathname, useRouter } from "next/navigation";
import { Minus, Plus } from "lucide-react";
import { updateCartData } from "@/lib/features/cartSlice";
import { useDispatch } from "react-redux";

const Card = (props) => {
  const router = useRouter();
  const path = usePathname();
  const dispatch = useDispatch();
  const isDash = path === "/dashboard";
  const { handleCartClick, ...rest } = props;
  const { id, brand, images, title, price } = rest;
  const data = { brand, images, title, price, id };

  return (
    <div
      className="border-1  bg-white w-full flex flex-col justify-between gap-6 p-4 w-full h-full rounded-lg border-grey-100"
      role="product info"
    >
      <div>
        {images && (
          <Image
            onClick={() => router.push(`/product/${id}`)}
            src={images[0]}
            alt={`${title} Image`}
            width={100}
            height={100}
            loading="lazy"
            className="w-full h-[225px] cursor-pointer"
          />
        )}
        <div className="flex flex-col gap-1 w-full">
          {title && <InfoCard title={"Name"} value={title} />}
          {brand && <InfoCard title={"Brand"} value={brand} />}
          {price && <InfoCard title={"Price"} value={`$${price}`} />}
          {!isDash && props?.count && (
            <div className="flex gap-1">
              <InfoCard title={"Qty"} value={props?.count} />
              <button
                className="cursor-pointer"
                onClick={() => dispatch(updateCartData({ id, act: "inc" }))}
              >
                <Plus />
              </button>
              <button
                className="cursor-pointer"
                onClick={() => dispatch(updateCartData({ id, act: "dec" }))}
              >
                <Minus />
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="w-full flex justify-center">
        <button
          className={`cursor-pointer ${
            isDash
              ? "bg-blue-500 hover:bg-blue-700"
              : "bg-red-400 hover:bg-red-600"
          } text-white font-bold py-2 px-4 rounded`}
          onClick={() => {
            const args = isDash ? data : data?.id;
            handleCartClick(args);
          }}
        >
          {isDash ? "Add to cart" : "Remove"}
        </button>
      </div>
    </div>
  );
};

export default Card;
