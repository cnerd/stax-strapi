import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import PricingTable from "@/components/Pricing/PricingTable";
import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Pricing() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Pricing"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg.jpg"
      />

      <PricingTable />

      <ContactForm />

      <CTO />

      <Footer />
    </>
  );
}
