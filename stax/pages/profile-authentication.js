import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";
import Authentication from "@/components/Authentication/Authentication";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function ProfileAuthentication() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Profile Authentication"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-4.jpg"
      />

      <Authentication />

      <CTO />

      <Footer />
    </>
  );
}
