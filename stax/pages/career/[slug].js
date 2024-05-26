import React from "react";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import CareerDetailsContent from "@/components/Career/CareerDetailsContent";
import Footer from "@/components/Layout/Footer";
import baseApiUrl from "@/utils/baseApiUrl";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

const BlogDetails = ({ careers: { data } }) => {
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle={data[0].attributes.title}
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-5.jpg"
      />

      <CareerDetailsContent {...data[0]} />

      <Footer />
    </>
  );
};

export async function getStaticPaths() {
  const res = await fetch(`${baseApiUrl}/api/careers`);
  const { data } = await res.json();
  // console.log(data);
  const paths = data.map((careers) => ({
    params: { slug: careers.attributes.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // console.log(params);
  // Call an external API endpoint to get products.
  // You can use any data fetching library
  const res = await fetch(
    `${baseApiUrl}/api/careers?filters[slug][$eq]=${params.slug}&populate=*`
  );
  const careers = await res.json();
  // By returning { props: { careers } }, the Blog component
  // will receive `careers` as a prop at build time
  return {
    props: {
      careers,
    },
  };
}

export default BlogDetails;
