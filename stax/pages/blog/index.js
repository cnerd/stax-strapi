import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import BlogGrid from "@/components/Blog/BlogGrid";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Blog() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Blog"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-2.jpg"
      />

      <BlogGrid />

      <CTO />

      <Footer />
    </>
  );
}
