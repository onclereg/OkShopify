// export default {
//         name: 'product',
//         title: 'Product',
//         type: 'document',
//         fields: [
//           {
//             name: 'name',
//             title: 'Name of product',
//             type: 'string',
//           },
//           {
//             name: 'images',
//             title: 'Product images',
//             type: 'array',
//             of:[{type:'image'}]
//           },
//           {
//             name: 'description',
//             title: 'Description of products',
//             type: 'text',
//           },
//           {
//             name: 'slug',
//             title: 'Product slug',
//             type: 'slug',
//             options:{
//                 source:'name'
//             }
//           },
//           {
//             name: 'price',
//             title: 'Price',
//             type: 'number',
//           },
//           {
//             name: 'category',
//             title: 'Product Category',
//             type: 'reference',
//             to:[{
//                 type:'category'
//             }]
//           },
//         ],
// }
export default {
  name: 'product',
  type: 'document',
  title: 'Product',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name of Product',
    },
    {
      name: 'images',
      type: 'array',
      title: 'Product Images',
      of: [{type: 'image'}],
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description of product',
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Product Slug',
      options: {
        source: 'name',
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
    },
    {
      name: 'price_id',
      title: 'Stripe Price ID',
      type: 'string',
    },
    {
      name: 'category',
      title: 'Product Category',
      type: 'reference',
      to: [
        {
          type: 'category',
        },
      ],
    },
  ],
}