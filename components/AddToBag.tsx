 /* eslint-disable */
"use client";

import { Button } from "@/components/ui/button";
import { urlfor } from "@/lib/sanity";
import { useShoppingCart } from "use-shopping-cart";


export interface ProductCart {
  name: string;
  description: string;
  price: number;
  currency: string;
  image: any;
  price_id: string;
}

export default function AddToBag({
  currency,
  description,
  image,
  name,
  price,
  price_id,
}: ProductCart) {
  const { addItem, handleCartClick } = useShoppingCart();

  const product = {
    name: name,
    description: description,
    price: price,
    currency: currency,
    image: urlfor(image),
    price_id: price_id,
  };
  return (
    <Button
      onClick={() => {
        addItem(product), handleCartClick();
      }}
    >
      Add To Cart
    </Button>
  );
}