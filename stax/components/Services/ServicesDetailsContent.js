import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const ServicesDetailsContent = ({
  attributes: {
    servicesDetailsText,
    image: {
      data: {
        attributes: { url: imageUrl },
      },
    },
  },
}) => {
  return (
    <>
      <div className="services-details-area ptb-100">
        <div className="container">
          <div className="services-details-desc">
            <div className="article-services-image">
              <Image src={imageUrl} alt="image" width={1280} height={500} />
            </div>

            <div className="article-services-content">
              <ReactMarkdown>{servicesDetailsText}</ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="services-details-shape">
          <Image
            src="/images/services-details/line-shape.png"
            alt="image"
            width={1920}
            height={612}
          />
        </div>
      </div>
    </>
  );
};

export default ServicesDetailsContent;
