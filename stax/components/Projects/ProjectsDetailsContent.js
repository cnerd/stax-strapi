import React from "react";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

const ProjectsDetailsContent = ({
  attributes: {
    title,
    category,
    client,
    duration,
    location,
    projectDetailsText,
    image: {
      data: {
        attributes: { url: imageUrl },
      },
    },
  },
}) => {
  return (
    <>
      <div className="projects-details-area ptb-100">
        <div className="container">
          <div className="projects-details-desc">
            <div className="article-projects-with-info">
              <div className="row align-items-center">
                <div className="col-lg-7 col-md-6">
                  <div className="projects-info-image">
                    <Image
                      src={imageUrl}
                      alt="image"
                      width={750}
                      height={580}
                    />

                    <div className="info-shape">
                      <Image
                        src="/images/projects-details/circle-shape.png"
                        alt="image"
                        width={150}
                        height={150}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-5 col-md-6">
                  <div className="projects-info-content">
                    <h3>{title}</h3>

                    <ul className="info-list">
                      <li>
                        <span>Category:</span> {category}
                      </li>
                      <li>
                        <span>Client:</span> {client}
                      </li>
                      <li>
                        <span>Duration:</span> {duration}
                      </li>
                      <li>
                        <span>Location:</span> {location}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="article-projects-content">
              <ReactMarkdown>{projectDetailsText}</ReactMarkdown>
            </div>
          </div>
        </div>

        <div className="projects-details-shape">
          <Image
            src="/images/projects-details/line-shape.png"
            alt="image"
            width={1920}
            height={612}
          />
        </div>
      </div>
    </>
  );
};

export default ProjectsDetailsContent;
