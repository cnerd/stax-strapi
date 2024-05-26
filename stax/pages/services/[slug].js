import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import ServicesDetailsContent from "@/components/Services/ServicesDetailsContent";
import ContactForm from "@/components/Common/ContactForm";
import ServiceSlider from "@/components/Services/ServiceSlider";
import CTO from "@/components/Common/CTO";
import Footer from "@/components/Layout/Footer";
import baseApiUrl from "@/utils/baseApiUrl";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

const ServicesDetails = ({ service: { data } }) => {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle={data[0].attributes.title}
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-5.jpg"
      />

      <ServicesDetailsContent {...data[0]} />

      <ContactForm />

      <div className="radius-0">
        <ServiceSlider />
      </div>

      <CTO />

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${baseApiUrl}/api/services`);
  const { data } = await res.json();
  // console.log(data);
  const paths = data.map((service) => ({
    params: { slug: service.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/services?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const service = await res.json();
  // By returning { props: { service } }, the Blog component
  // will receive `service` as a prop at build time
  return {
    props: {
      service,
    },
  };
}

export default ServicesDetails;
