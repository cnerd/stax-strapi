import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import Footer from "@/components/Layout/Footer";
import AllFeedbacks from "@/components/Testimonials/AllFeedbacks";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Testimonials() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Testimonials"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-5.jpg"
      />

      <AllFeedbacks />

      <Footer />
    </>
  );
}
