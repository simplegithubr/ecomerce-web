



"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Product {
  _id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  previousPrice: number;
  isNew: boolean;
  category: string;
  brand: string;
}

interface ProductsProps {
  products: Product[];
}

function Products({ products }: ProductsProps) {
  return (
    <div>
      <h1 className="text-center text-2xl font-bold mt-3 p-2 underline">
        Get Your Favourite Phone
      </h1>
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-10">
        {products.map((item) => (
          <Link
            href={{ pathname: "/singleproduct", query: { _id: item._id } }}
            key={item._id}
          >
            <div className="border-[1px] border-gray-400 rounded-md overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                width={400}
                height={400}
              />
              <div className="px-4 pb-2 text-sm flex flex-col gap-1">
                <p className="text-gray-400">{item.title}</p>
                <p className="font-semibold">${item.price}</p>
                <div className="flex items-center justify-between">
                  <button>Add To Cart</button>
                  <button>More Info</button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
