const axios = require("axios");

export default async function Page({ params }) {
  const id = params.id;
  const response = await axios.get(
    `https://ecommerce-backend-nodejs-ruby.vercel.app/${id}`
  );
  const product = response.data.product;

  return <div>{product.name}</div>;
}

export async function generateStaticParams() {
  const posts = await fetch(
    "https://ecommerce-backend-nodejs-ruby.vercel.app/"
  ).then((res) => res.json());

  return posts.products.map((item) => ({
    id: String(item.id),
  }));
}
