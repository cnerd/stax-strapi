import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import Footer from "@/components/Layout/Footer";
import GalleryImage from "@/components/Gallery/GalleryImage";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Gallery() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Gallery"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg.jpg"
      />

      <GalleryImage />

      <Footer />
    </>
  );
}
