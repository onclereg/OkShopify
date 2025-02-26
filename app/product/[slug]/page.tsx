import AddToBag from '@/components/AddToBag';
import CheckoutNow from '@/components/CheckOutNow';
import { Button } from '@/components/ui/button';
import { client, urlfor } from '@/lib/sanity';
import { Star, Truck } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

export interface slugprop{
    _id:string,
    name:string,
    description:string,
    price:number,
    categoryName:string,
    imageUrl:any,
    price_id: string;
}
async function getData(slug: string) {
    const query = `*[_type == "product" && slug.current == "${slug}"][0] {
        _id,
        name,
        description,
        price,
        price_id,
        "categoryName": category->name,
        "imageUrl": images[0].asset
        }`;
  
    const data = await client.fetch(query);
  
    return data;
  }

  export const dynamic = "force-dynamic";
  
const ProductPage = async ({ params,}: {params: { slug: string };}) => {
    const data:slugprop = await getData(params.slug);

  return (
    <div className='grid md:grid-cols-2 max-w-7xl p-3 mx-auto bg-white dark:bg-inherit h-full'>
        <div className='relative h-[70vh]  '>
            <Image src={urlfor(data.imageUrl)}
                alt="Product image"
                className="object-contain "
                fill
                priority
            />
        </div>
        <section>
        <div className='grid gap-4 p-3 text-gray-500 dark:text-white md:my-8 '>
            <div className='grid gap-1'>
                <p>{data.categoryName}</p>
                <h1 className='text-2xl font-bold text-black dark:text-white'>
                    {data.name}
                </h1>
                <div className="flex items-center gap-3">
                    <Button className="rounded-full gap-x-2">
                        <span className="text-sm">4.2</span>
                        <Star className="h-5 w-5" />
                    </Button>

                    <span className="text-sm  transition duration-100">
                        56 Ratings
                    </span>
                </div>
            </div>
            <div className="gap-1">
              <div className="flex items-end gap-2">
                <span className="text-xl font-bold text-gray-800 dark:text-white md:text-2xl">
                  ${data.price}
                </span>
                <span className="mb-0.5 text-red-500 line-through">
                  ${data.price + 3000}
                </span>
              </div>

              <span className="text-sm ">
                Incl. Vat plus shipping
              </span>
            </div>
            <div className=" flex items-center gap-2">
              <Truck className="w-6 h-6" />
              <span className="text-sm">2-4 Day Shipping</span>
            </div>
            <div className="flex gap-2.5">
            <AddToBag
                currency="USD"
                description={data.description}
                image={urlfor(data.imageUrl)}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
              <CheckoutNow
                currency="USD"
                description={data.description}
                image={urlfor(data.imageUrl)}
                name={data.name}
                price={data.price}
                key={data._id}
                price_id={data.price_id}
              />
            </div>
            <p className="text-base text-gray-500 tracking-wide my-2">
              {data.description}
            </p>
        </div>
        </section>

    </div>
  )
}

export default ProductPage;