import React from "react";
import Image from "next/image";

const WhoWeAre = () => {
  return (
    <>
      <div className="about-area border-none pt-100">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <Image
                  src="/images/about/about.png"
                  alt="image"
                  width={735}
                  height={642}
                  data-aos="fade-down"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-up"
                data-aos-delay="80"
                data-aos-duration="800"
                data-aos-once="true"
              >
                <span>WHO WE ARE</span>
                <h3>
                  We Are <b>All In One</b> IT Solution & Technology Company
                </h3>
                <p>
                  We are leading technology solutions providing company all over
                  the world doing over 40 years lorem ipsum dolor sit amet.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-shape-1">
          <Image
            src="/images/about/about-shape.png"
            alt="image"
            width={1920}
            height={612}
          />
        </div>
      </div>
    </>
  );
};

export default WhoWeAre;
