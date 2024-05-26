import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import AllServicesCardStyle2 from "@/components/Services/AllServicesCardStyle2";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Services2() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Services Style Two"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-3.jpg"
      />

      <AllServicesCardStyle2 />

      <ContactForm />

      <Footer />
    </>
  );
}
