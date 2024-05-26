import React from "react";
import Link from "next/link";

const PageBannerTitle = ({ pageTitle, homePageUrl, homePageText, bgImg }) => {
  return (
    <>
      <div
        className="page-banner-area mt-94"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        <div className="container">
          <div
            className="page-banner-content"
            data-aos="fade-right"
            data-aos-delay="50"
            data-aos-duration="500"
            data-aos-once="true"
          >
            <h2>{pageTitle}</h2>
            <ul>
              <li>
                <Link href={homePageUrl}>{homePageText}</Link>
              </li>
              <li>{pageTitle}</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PageBannerTitle;
