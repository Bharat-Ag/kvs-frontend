'use client'
import { useEffect, useState} from "react";
import "../../../../public/assets/style/about.css";
import { toast } from "react-toastify";
import { assets} from "../../../../public/assets/svgs/svg";
import ApiService from "@/app/service/api/api.services";
import CTA from "@/app/components/CTA";
import Banner from "@/app/components/Banner";
import PageTitle from "@/app/components/PageTitle";


export default function Contact() {
const fetchProducts = async () => {
  try {
    const products = await ApiService.getProducts();
    console.log("Products received in page:", products.data);
    return products.data;
  } catch (error) {
    console.error("Error caught in page:", error);
    toast.error("Failed to fetch products. Please try again.");
    return null;
  }
};


useEffect(()=>{
    fetchProducts();
},[])


  return (
    <>
      <PageTitle title={"Product"} />

      <Banner title="Our Products" image={assets.productHero}/>

      <CTA title={"Start Your Global Trade Journey"} />
    </>
  );
}
