import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import SearchPagePost from "@/components/Blog/SearchPagePost";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function SearchPage() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Search Page"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-2.jpg"
      />

      <SearchPagePost />

      <CTO />

      <Footer />
    </>
  );
}
