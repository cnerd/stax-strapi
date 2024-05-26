import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import SingleBlogContent2 from "@/components/Blog/SingleBlogContent2";
import Footer from "@/components/Layout/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function SingleBlog2() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-2.jpg"
      />

      <SingleBlogContent2 />

      <Footer />
    </>
  );
}
