import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";

const HeroSlider = () => {
  const [heroSlider, setHeroSlider] = React.useState();
  React.useEffect(() => {
    const getHeroSlider = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/hero-slider-home-1?populate=sliderITem.image`
      );
      setHeroSlider(response.data);
      // console.log(response.data)
    };
    getHeroSlider();
  }, []);
  return (
    <>
      {heroSlider && (
        <div className="main-slides-area">
          <Swiper
            spaceBetween={0}
            effect={"fade"}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
            }}
            modules={[EffectFade, Pagination, Autoplay]}
            className="mySwiper home-slides"
          >
            {heroSlider.data.attributes.sliderITem.map((item) => (
              <SwiperSlide key={item.id}>
                <div className="main-slides-item">
                  <div className="container-fluid">
                    <div className="row align-items-center">
                      <div className="col-lg-7 col-md-12">
                        <div className="main-slides-content">
                          <span
                            data-aos="fade-right"
                            data-aos-delay="70"
                            data-aos-duration="700"
                            data-aos-once="true"
                          >
                            {item.subTitle}
                          </span>
                          <h1
                            data-aos="fade-right"
                            data-aos-delay="70"
                            data-aos-duration="700"
                            data-aos-once="true"
                          >
                            {item.title}
                          </h1>
                          <p
                            data-aos="fade-right"
                            data-aos-delay="70"
                            data-aos-duration="700"
                            data-aos-once="true"
                          >
                            {item.shortDec}
                          </p>

                          <div
                            className="slides-btn"
                            data-aos="fade-right"
                            data-aos-delay="70"
                            data-aos-duration="700"
                            data-aos-once="true"
                          >
                            <Link href={item.btnLink} className="default-btn">
                              {item.btnText}
                            </Link>
                          </div>
                        </div>
                      </div>

                      <div
                        className="col-lg-5 col-md-12"
                        data-aos="fade-down"
                        data-aos-delay="70"
                        data-aos-duration="700"
                        data-aos-once="true"
                      >
                        <div className="main-slides-image">
                          <Image
                            src={item.image.data.attributes.url}
                            alt={item.image.data.attributes.alternativeText}
                            width={670}
                            height={735}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Shape Images */}
          <div className="main-slides-shape-1">
            <Image
              src="/images/home-slides/slides-shape-1.png"
              alt="image"
              width={155}
              height={166}
            />
          </div>
          <div className="main-slides-shape-2">
            <Image
              src="/images/home-slides/slides-shape-2.png"
              alt="image"
              width={140}
              height={125}
            />
          </div>
          <div className="main-slides-shape-3">
            <Image
              src="/images/home-slides/slides-shape-3.png"
              alt="image"
              width={124}
              height={124}
            />
          </div>
          <div className="main-slides-shape-4">
            <Image
              src="/images/home-slides/slides-shape-4.png"
              alt="image"
              width={185}
              height={92}
            />
          </div>
          <div className="main-slides-shape-5">
            <Image
              src="/images/home-slides/slides-shape-5.png"
              alt="image"
              width={45}
              height={45}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default HeroSlider;
