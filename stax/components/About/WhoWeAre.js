import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const WhoWeAre = () => {
  const [whoWeAre, setWhoWeAre] = React.useState();
  React.useEffect(() => {
    const getWhoWeAre = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/about-who-we-are?populate=*`
      );
      setWhoWeAre(response.data);
      // console.log(response.data);
    };
    getWhoWeAre();
  }, []);
  return (
    <>
      {whoWeAre && (
        <div className="about-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div className="about-image">
                  <Image
                    src={whoWeAre.data.attributes.image.data.attributes.url}
                    alt={
                      whoWeAre.data.attributes.image.data.attributes
                        .alternativeText
                    }
                    width={750}
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
                  <span>{whoWeAre.data.attributes.subTitle}</span>
                  <h3>{whoWeAre.data.attributes.title}</h3>
                  <ReactMarkdown>
                    {whoWeAre.data.attributes.aboutDec}
                  </ReactMarkdown>
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
      )}
    </>
  );
};

export default WhoWeAre;
