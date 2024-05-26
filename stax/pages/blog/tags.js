import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import TagsPost from "@/components/Blog/TagsPost";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Tags() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Tags"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-2.jpg"
      />

      <TagsPost />

      <CTO />

      <Footer />
    </>
  );
}
