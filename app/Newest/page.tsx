import { Button } from '@/components/ui/button';
import { client, urlfor } from '@/lib/sanity';
import { ArrowBigRightIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export interface dataprop{
  _id:string,
  price:number,
  description:string,
  slug: string,
  category:string,
  imageURL:string
}

async function getData(){
const query = `*[_type == "product"][0...20] {
  _id,
    price,
    description,
    "category":category._type,
    "slug": slug.current,
    "imageURL": images[0].asset  
}`;
  const data = client.fetch(query);

  return data
  
}

const Newest = async () => {
const data:dataprop[] = await getData();

  return (
    <div className='p-2 my-3 bg-white dark:bg-inherit'>
      <div className='flex justify-between items-center text-black dark:text-white px-5'>
        <h1 className='font-semibold font-serif text-base md:text-xl'>Our Newest Products</h1>
        <p className='text-primary text-lg items-center flex gap-2'>See all <span><ArrowBigRightIcon/></span></p>
      </div>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-5 xl:gap-x-8">
          {data.map((product) => (
            <div key={product._id} className="group relative">
              <div className="aspect-square w-full overflow-hidden relative rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
                <Image
                  src={urlfor(product.imageURL)}
                  alt="Product image"
                  className="object-cover"
                  fill
                  priority
                />
              </div>

              <div className="mt-4 grid justify-between">
                <div className='flex items-center justify-between'>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {product.slug}  
                  </h3>
                  <p className="text-lg font-bold text-primary">
                  ₦{product.price}
                  </p>  
                </div>
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">
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
  )
}

export default Newest