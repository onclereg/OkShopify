import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url"


export const client = createClient({
  projectId: "tqti4vd8",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

const builder= imageUrlBuilder(client)

export function urlfor(source:any){
  return builder.image(source).url();
}

// // import { client } from "./sanityClient"; // Make sure this is your configured Sanity client

// const builder = imageUrlBuilder(client);

// function urlFor(source) {
//   return builder.image(source).url();  // Generates a valid URL
// }

// // Example Usage
// const imageUrl = urlFor(yourImageObject);
// console.log(imageUrl);