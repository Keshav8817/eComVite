import "./Home.css";

import React from "react";

import Brands from "../Components/Brands";
import FeaturedCate from "../Components/FeaturedCate";
import FeaturedPro from "../Components/FeaturedPro";

import HeroSection from "../Components/HeroSection";
import OfferSection from "../Components/OfferSection";
import  Layout  from "../Components/Layout";

function Home() {
  return (
 
    <Layout>
      
    <HeroSection/>
    <FeaturedCate className ="hContainer"/>
    <FeaturedPro/>
    <OfferSection/>
    <Brands/>
    </Layout>
  
  
  
  );
}
export default Home;
