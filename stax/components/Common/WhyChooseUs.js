import React from "react";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const WhyChooseUs = () => {
  const [whyChooseUs, setWhyChooseUs] = React.useState();
  React.useEffect(() => {
    const getWhyChooseUs = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/why-choose-us?populate=reason.image`
      );
      setWhyChooseUs(response.data);
      // console.log(response.data);
    };
    getWhyChooseUs();
  }, []);
  return (
    <>
      {whyChooseUs && (
        <div className="choose-area pt-100 pb-75">
          <div className="container">
            <div className="section-title">
              <span>{whyChooseUs.data.attributes.subTitle}</span>

              <ReactMarkdown>
                {whyChooseUs.data.attributes.titleAndShortText}
              </ReactMarkdown>
            </div>

            <div className="row justify-content-center">
              {whyChooseUs.data.attributes.reason.map((info) => (
                <div className="col-lg-3 col-sm-6" key={info.id}>
                  <div
                    className="single-choose-card"
                    data-aos="fade-up"
                    data-aos-delay="50"
                    data-aos-duration="600"
                    data-aos-once="true"
                  >
                    <div className="choose-image">
                      <Image
                        src={info.image.data.attributes.url}
                        alt={info.image.data.attributes.alternativeText}
                        width={140}
                        height={150}
                      />
                    </div>
                    <div className="choose-content">
                      <h3>{info.title}</h3>
                      <p>{info.shortText}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shape Images */}
          <div className="choose-shape-1">
            <Image
              src="/images/choose/choose-shape.png"
              alt="image"
              width={1920}
              height={612}
            />
          </div>
          <div className="choose-shape-2">
            <Image
              src="/images/choose/choose-shape-2.png"
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

export default WhyChooseUs;
