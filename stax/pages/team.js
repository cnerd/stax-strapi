import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import TeamMembers from "@/components/Team/TeamMembers";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Team() {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Team"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-5.jpg"
      />

      <TeamMembers />

      <CTO />

      <Footer />
    </>
  );
}
