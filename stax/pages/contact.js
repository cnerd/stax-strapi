import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import GoogleMap from "@/components/Common/GoogleMap";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Contact() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-3.jpg"
      />

      <CTO />

      <ContactForm />

      <GoogleMap />

      <Footer />
    </>
  );
}
