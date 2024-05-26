import React from "react";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";

const ServicesCard = () => {
  const [services, setServices] = React.useState();
  React.useEffect(() => {
    const getServices = async () => {
      const response = await axios.get(`${baseApiUrl}/api/services?populate=*`);
      setServices(response.data);
      // console.log(response.data)
    };
    getServices();
  }, []);
  return (
    <>
      <div className="services-area bg-with-14042C-color ptb-100">
        <div className="container">
          <div className="section-title">
            <span>SERVICES</span>
            <h2>
              We Provide the Best Quality <b>Services</b>
            </h2>
            <p>
              We are technology solutions providing company all over the world
              doing over 40 years. lorem ipsum dolor sit amet.
            </p>
          </div>

          {services && (
            <div className="row justify-content-center">
              {services.data.slice(0, 4).map((service) => (
                <div className="col-lg-3 col-md-6" key={service.id}>
                  <div className="services-item">
                    <div className="services-image">
                      <Link href={`/services/${service.attributes.slug}`}>
                        <Image
                          src={service.attributes.image.data.attributes.url}
                          alt={
                            service.attributes.image.data.attributes
                              .alternativeText
                          }
                          width={500}
                          height={335}
                        />
                      </Link>
                    </div>
                    <div className="services-content">
                      <h3>
                        <Link href={`/services/${service.attributes.slug}`}>
                          {service.attributes.title}
                        </Link>
                      </h3>
                      <p>{service.attributes.shortText}</p>
                      <Link
                        href={`/services/${service.attributes.slug}`}
                        className="services-btn"
                      >
                        {service.attributes.btnText}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <div className="services-all-btn">
            <Link href="/services/services" className="default-btn">
              Explore All Services
            </Link>
          </div>
        </div>

        {/* Shape Images */}
        <div className="services-shape-1">
          <Image
            src="/images/services/services-shape-1.png"
            alt="image"
            width={230}
            height={272}
          />
        </div>
        <div className="services-shape-2">
          <Image
            src="/images/services/services-shape-2.png"
            alt="image"
            width={140}
            height={125}
          />
        </div>
      </div>
    </>
  );
};

export default ServicesCard;
