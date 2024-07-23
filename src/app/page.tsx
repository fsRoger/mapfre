'use client'

import React from "react";
import LoginForm from "./components/LoginForm";
import Link from "next/link";
import CardProducts from "./components/CardProducts";
import Faq from "./components/Faq";

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-3xl font-bold mb-6">Home</h1>
      <Link href="/Login">
        
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ">Login</button>
          </Link>
          <CardProducts/>
          <Faq/>
        
      
     
    </div>
  );
};

export default HomePage;
