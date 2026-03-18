"use client";
import React from "react";
import Container from "../common/Container";

const Footer: React.FC = () => {
  return (
    <footer className="bg-linear-to-r from-[#8D75EF] to-[#7556EF] 2xl:h-[295px] xl:h-[250px] sm:h-[200px] h-[180px]  flex items-center justify-center">
      <Container>
        <div className="">
          <h2 className="text-white text-[30px] sm:text-[30px] xl:text-[40px] 2xl:text-[50px]  font-semibold text-center pb-[5px]">
            Cevver
          </h2>
          <p className="text-white md:text-lg text-sm font-normal text-center">
            © {new Date().getFullYear()} Cevver. All rights reserved..
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
