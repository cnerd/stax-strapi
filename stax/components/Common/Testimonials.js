import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const Testimonials = () => {
  const [testimonials, setTestimonials] = React.useState();
  React.useEffect(() => {
    const getTestimonials = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/testimonials-style-1?populate=item.image`
      );
      setTestimonials(response.data);
      // console.log(response.data);
    };
    getTestimonials();
  }, []);
  return (
    <>
      {testimonials && (
        <div className="testimonials-area ptb-100">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12">
                <div
                  className="testimonials-section-content"
                  data-aos="fade-right"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  <span>{testimonials.data.attributes.subTitle}</span>

                  <ReactMarkdown>
                    {testimonials.data.attributes.titleAndShortText}
                  </ReactMarkdown>

                  <div className="testimonials-btn">
                    <Link
                      href={testimonials.data.attributes.btnLink}
                      className="default-btn"
                    >
                      {testimonials.data.attributes.btnText}
                    </Link>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-12">
                <div
                  className="testimonials-item"
                  data-aos="fade-left"
                  data-aos-delay="80"
                  data-aos-duration="800"
                  data-aos-once="true"
                >
                  {testimonials.data.attributes.item.slice(0, 3).map((info) => (
                    <div className="item-box" key={info.id}>
                      <Image
                        src={info.image.data.attributes.url}
                        className="rounded-circle"
                        alt={info.image.data.attributes.alternativeText}
                        width={150}
                        height={150}
                      />
                      <p>{info.feedbackText}</p>
                      <h4>
                        {info.name} <span>{info.designation}</span>
                      </h4>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="testimonialsbg-shape">
            <Image
              src="/images/testimonials/testimonials-shape.png"
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

export default Testimonials;
