import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import CTO from "@/components/Common/CTO";
import FaqContent from "@/components/FAQ/FaqContent";
import Footer from "@/components/Layout/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Faq() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Faq"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-4.jpg"
      />

      <FaqContent />

      <CTO />

      <Footer />
    </>
  );
}
