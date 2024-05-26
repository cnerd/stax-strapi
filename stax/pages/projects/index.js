import React from "react";
import Link from "next/link";
import NavbarTwo from "@/components/Layout/NavbarTwo";
import CTO from "@/components/Common/CTO";
import ContactForm from "@/components/Common/ContactForm";
import Footer from "@/components/Layout/Footer";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";
import PageBannerTitle from "@/components/Common/PageBannerTitle";

export default function Projects() {
  const [projects, setProjects] = React.useState();
  React.useEffect(() => {
    const getProjects = async () => {
      const response = await axios.get(`${baseApiUrl}/api/projects?populate=*`);
      setProjects(response.data);
      // console.log(response.data)
    };
    getProjects();
  }, []);
  return (
    <>
      <NavbarTwo />

      <PageBannerTitle
        pageTitle="Projects"
        homePageUrl="/"
        homePageText="Home"
        bgImg="/images/page-banner/banner-bg-5.jpg"
      />

      {projects && (
        <div className="projects-area pt-100 pb-75">
          <div className="container">
            <div className="section-title">
              <span>PROJECTS</span>
              <h2>
                Our Latest <b>Incredible</b> Client&apos;s Projects
              </h2>
            </div>

            <div className="row justify-content-center">
              {projects.data.map((project) => (
                <div className="col-lg-4 col-md-6" key={project.id}>
                  <div className="projects-item bg-F2F1F3">
                    <div className="projects-image">
                      <Link href={`/projects/${project.attributes.slug}`}>
                        <Image
                          src={project.attributes.image.data.attributes.url}
                          alt={
                            project.attributes.image.data.attributes
                              .alternativeText
                          }
                          width={750}
                          height={500}
                        />
                      </Link>
                    </div>
                    <div className="projects-content">
                      <h3>
                        <Link href={`/projects/${project.attributes.slug}`}>
                          {project.attributes.title}
                        </Link>
                      </h3>
                      <Link
                        href={`/projects/${project.attributes.slug}`}
                        className="projects-btn"
                      >
                        {project.attributes.btnText}
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="projects-bg-shape-1">
            <Image
              src="/images/projects/projects-bg-shape.png"
              alt="image"
              width={1920}
              height={612}
            />
          </div>
        </div>
      )}

      <CTO />

      <ContactForm />

      <Footer />
    </>
  );
}
