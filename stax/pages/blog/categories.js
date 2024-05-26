import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import CategoriesPost from "@/components/Blog/CategoriesPost";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Categories() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Categories"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-2.jpg"
      />

      <CategoriesPost />

      <CTO />

      <Footer />
    </>
  );
}
