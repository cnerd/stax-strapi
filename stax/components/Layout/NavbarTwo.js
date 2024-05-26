import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import baseApiUrl from "@/utils/baseApiUrl";
import Image from "next/image";

const NavbarTwo = () => {
  // Logo API
  const [logo, setLogo] = React.useState();
  React.useEffect(() => {
    const getLogo = async () => {
      const response = await axios.get(
        `${baseApiUrl}/api/site-logo?populate=*`
      );
      setLogo(response.data);
      // console.log(response.data);
    };
    getLogo();
  }, []);
  // End Logo API

  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  // console.log(router.asPath)

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  // Sidebar Modal
  const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
  const handleToggleSidebarModal = () => {
    setActiveSidebarModal(!isActiveSidebarModal);
  };

  return (
    <>
      {/* Start Header Area */}
      <header className="main-header-area">
        <div id="navbar" className="navbar-area">
          <div className="main-navbar navbar-with-black-color">
            <div className="container-fluid">
              <nav className="navbar navbar-expand-md navbar-light">
                {logo && (
                  <Link href="/" className="navbar-brand">
                    <Image
                      src={logo.data.attributes.whiteLogo.data.attributes.url}
                      alt={
                        logo.data.attributes.whiteLogo.data.attributes
                          .alternativeText
                      }
                      width={124}
                      height={50}
                    />
                  </Link>
                )}

                <button
                  onClick={toggleNavbar}
                  className={classTwo}
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="icon-bar top-bar"></span>
                  <span className="icon-bar middle-bar"></span>
                  <span className="icon-bar bottom-bar"></span>
                </button>

                <div className={classOne} id="navbarSupportedContent">
                  <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                      <Link
                        href="/"
                        className={`nav-link ${currentPath == "/" && "active"}`}
                      >
                        Home
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="#"
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        About <i className="ri-arrow-down-s-line"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/about/"
                            className={`nav-link ${
                              currentPath == "/about/" && "active"
                            }`}
                          >
                            About
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/gallery/"
                            className={`nav-link ${
                              currentPath == "/gallery/" && "active"
                            }`}
                          >
                            Gallery
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/testimonials/"
                            className={`nav-link ${
                              currentPath == "/testimonials/" && "active"
                            }`}
                          >
                            Testimonials
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="#"
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Services <i className="ri-arrow-down-s-line"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/services/"
                            className={`nav-link ${
                              currentPath == "/services/" && "active"
                            }`}
                          >
                            Services Style - 1
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/services/services-2/"
                            className={`nav-link ${
                              currentPath == "/services/services-2/" && "active"
                            }`}
                          >
                            Services Style - 2
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/services/software-development/"
                            className={`nav-link ${
                              currentPath ==
                                "/services/software-development/" && "active"
                            }`}
                          >
                            Services Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="#"
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Projects <i className="ri-arrow-down-s-line"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/projects/"
                            className={`nav-link ${
                              currentPath == "/projects/" && "active"
                            }`}
                          >
                            Projects
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/projects/cashier-software/"
                            className={`nav-link ${
                              currentPath == "/projects/cashier-software/" &&
                              "active"
                            }`}
                          >
                            Projects Details
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="#"
                        className="nav-link"
                        onClick={(e) => e.preventDefault()}
                      >
                        Pages <i className="ri-arrow-down-s-line"></i>
                      </Link>

                      <ul className="dropdown-menu">
                        <li className="nav-item">
                          <Link
                            href="/pricing/"
                            className={`nav-link ${
                              currentPath == "/pricing/" && "active"
                            }`}
                          >
                            Pricing
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/team/"
                            className={`nav-link ${
                              currentPath == "/team/" && "active"
                            }`}
                          >
                            Team
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/faq/"
                            className={`nav-link ${
                              currentPath == "/faq/" && "active"
                            }`}
                          >
                            FAQ
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="#"
                            className="nav-link"
                            onClick={(e) => e.preventDefault()}
                          >
                            Career <i className="ri-arrow-right-s-line"></i>
                          </Link>

                          <ul className="dropdown-menu">
                            <li className="nav-item">
                              <Link
                                href="/career/"
                                className={`nav-link ${
                                  currentPath == "/career/" && "active"
                                }`}
                              >
                                Career
                              </Link>
                            </li>

                            <li className="nav-item">
                              <Link
                                href="/career/android-developer/"
                                className={`nav-link ${
                                  currentPath == "/career/android-developer/" &&
                                  "active"
                                }`}
                              >
                                Career Details
                              </Link>
                            </li>
                          </ul>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/profile-authentication/"
                            className={`nav-link ${
                              currentPath == "/profile-authentication/" &&
                              "active"
                            }`}
                          >
                            Profile Authentication
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/membership-levels/"
                            className={`nav-link ${
                              currentPath == "/membership-levels/" && "active"
                            }`}
                          >
                            Membership Levels
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/terms-of-service/"
                            className={`nav-link ${
                              currentPath == "/terms-of-service/" && "active"
                            }`}
                          >
                            Terms of Service
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/privacy-policy/"
                            className={`nav-link ${
                              currentPath == "/privacy-policy/" && "active"
                            }`}
                          >
                            Privacy Policy
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/coming-soon/"
                            className={`nav-link ${
                              currentPath == "/coming-soon/" && "active"
                            }`}
                          >
                            Coming Soon
                          </Link>
                        </li>

                        <li className="nav-item">
                          <Link
                            href="/404/"
                            className={`nav-link ${
                              currentPath == "/404/" && "active"
                            }`}
                          >
                            404 Error Page
                          </Link>
                        </li>
                      </ul>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/blog/"
                        className={`nav-link ${
                          currentPath == "/blog/" && "active"
                        }`}
                      >
                        Blog
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/pricing/"
                        className={`nav-link ${
                          currentPath == "/pricing/" && "active"
                        }`}
                      >
                        Pricing
                      </Link>
                    </li>

                    <li className="nav-item">
                      <Link
                        href="/contact/"
                        className={`nav-link ${
                          currentPath == "/contact/" && "active"
                        }`}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="others-options d-flex align-items-center">
                  <div className="option-item">
                    <i
                      className="search-btn ri-search-line"
                      onClick={handleToggleSearchModal}
                    ></i>
                  </div>

                  <div className="option-item">
                    <div
                      className="side-menu-btn"
                      onClick={handleToggleSidebarModal}
                    >
                      <i className="ri-bar-chart-horizontal-line"></i>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* End Header Area */}

      {/* Search Form */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="ri-search-2-line"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Form */}

      {/* Sidebar Modal */}
      <div
        className={`sidebarModal modal right fade ${
          isActiveSidebarModal ? "" : "show"
        }`}
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <button
              type="button"
              className="close"
              onClick={handleToggleSidebarModal}
            >
              <i className="ri-close-line"></i>
            </button>

            <div className="modal-body">
              <Link href="/">
                <Image
                  src="/images/black-logo.png"
                  alt="image"
                  width={124}
                  height={50}
                />
              </Link>
              <div className="sidebar-content">
                <h3>About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <div className="sidebar-btn">
                  <Link href="/contact" className="default-btn">
                    Let’s Talk
                  </Link>
                </div>
              </div>

              <div className="sidebar-contact-info">
                <h3>Contact Information</h3>

                <ul className="info-list">
                  <li>
                    <i className="ri-phone-fill"></i>{" "}
                    <a href="tel:9901234567">+990-123-4567</a>
                  </li>

                  <li>
                    <i className="ri-mail-line"></i>{" "}
                    <a href="mailto:stax@gmail.com">stax@gmail.com</a>
                  </li>

                  <li>
                    <i className="ri-map-pin-line"></i> 413 North Las Vegas, NV
                    89032
                  </li>
                </ul>
              </div>

              <ul className="sidebar-social-list">
                <li>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-facebook-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.twitter.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-twitter-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-linkedin-fill"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="ri-instagram-fill"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* End Sidebar Modal */}
    </>
  );
};

export default NavbarTwo;
