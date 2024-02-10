import ProductDashboard from "@/components/Dashboard/ProductDashboard";
import dotenv from "dotenv";
dotenv.config();
import styles from './page.module.css'
import Layout from "@/components/Layout";

export const api = process.env.API_URL;
export default function Home() {
  return <>

    <Layout api={process.env.API_URL}>Home</Layout>
  </>;
}
