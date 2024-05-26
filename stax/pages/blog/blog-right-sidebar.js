import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import BlogWithRightSidebar from "@/components/Blog/BlogWithRightSidebar";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function BlogRightSidebar() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Blog Right Sidebar"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-2.jpg"
      />

      <BlogWithRightSidebar />

      <CTO />

      <Footer />
    </>
  );
}
