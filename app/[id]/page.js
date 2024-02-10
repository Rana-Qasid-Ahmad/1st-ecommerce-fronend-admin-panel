import Layout from "@/components/Layout";
import UpdateForm from "@/components/UpdateForm/UpdateForm";

const axios = require("axios");


export default async function Page({ params }) {
  const id = params.id;
  // const response = await axios.get(
  //   `https://ecommerce-backend-nodejs-ruby.vercel.app/id/${id}`
  // );
  // const product = response.data.product;

  return <Layout api={process.env.API_URL}><UpdateForm API_URL={process.env.API_URL} id={id} /></Layout>;
}
