import { Button } from '@/components/ui/button';
import { client, urlfor } from '@/lib/sanity'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export interface categoryProp {
    _id:string;
    name:string;
    description:string;
    price:number;
    slug:string;
    imageUrl: string;
    categoryName:string;
}

async function getData(category:string){
   const query = `*[_type == "product" && category->name == "${category}"]{
  _id,
    name,
    description,
    price,
    "slug": slug.current,
    "imageUrl": images[0].asset,
    "categoryName": category->name
}`;

const data = await client.fetch(query);
return data;

};

const Category = async ({ params,}: {params: { category: string };}) => {
    const data:categoryProp[] = await getData(params.category);

  return (
    <div className="bg-white dark:bg-black py-3 md:py-9  dark:text-white">
    <div className="mx-auto max-w-2xl px-4 sm:px-6  lg:max-w-7xl lg:px-8">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Our Products for {params.category}
        </h2>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {data.map((product) => (
          <div key={product._id} className="group relative">
            <div className="aspect-square w-full overflow-hidden rounded-md bg-gray-200 dark:bg-black group-hover:opacity-75 lg:h-80">
              <Image
                src={urlfor(product.imageUrl)}
                alt="Product image"
                className="w-full h-full object-cover object-center lg:h-full lg:w-full"
                width={300}
                height={300}
              />
            </div>

            <div className="mt-4 grid justify-between">
                <div className='flex items-center justify-between'>
                  <h3 className="text-lg font-bold text-gray-90 dark:text-white v">
                    {product.slug}  
                  </h3>
                  <p className="text-lg font-bold text-primary">
                  ₦{product.price}
                  </p>  
                </div>
                <p className="mt-1 text-sm text-gray-500  dark:text-white line-clamp-2">
                  {product.description}
                </p>
                
              </div>
              <div className='p-3'>
                <Link href={`/product/${product.slug}`}>
                  <Button className='w-full h-[50px]'>
                    View More
                  </Button>
                </Link>
              </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Category