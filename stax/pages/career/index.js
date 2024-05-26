import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import CTO from "@/components/Common/CTO";
import CareerContent from "@/components/Career/CareerContent";
import Footer from "@/components/Layout/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Career() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Career"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-5.jpg"
      />

      <CareerContent />

      <CTO />

      <Footer />
    </>
  );
}
