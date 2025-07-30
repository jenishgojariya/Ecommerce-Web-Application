import Image from "next/image";
import React from "react";
import InfoCard from "./InfoCard";
import { usePathname } from "next/navigation";

const Card = (props) => {
  const path = usePathname();
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
            src={images[0]}
            alt={`${title} Image`}
            width={100}
            height={100}
            loading="lazy"
            className="w-full h-[225px]"
          />
        )}
        <div className="flex flex-col gap-1 w-full">
          {title && <InfoCard title={"Name"} value={title} />}
          {brand && <InfoCard title={"Brand"} value={brand} />}
          {price && <InfoCard title={"Price"} value={`$${price}`} />}
          {!isDash && props?.count && (
            <InfoCard title={"Qty"} value={props?.count} />
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
