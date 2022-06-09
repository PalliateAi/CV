/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksStyle4 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section className="portfolio-frl section-padding pb-70">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head  text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Portfolio
              </h6>
              <h3 className="wow color-font">
                Current & <br /> Past Projects.
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="filtering col-12">
            <div className="filter wow fadeIn" data-wow-delay=".5s">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".mobile">Mobile Apps</span>
              <span data-filter=".web-apps">Web Apps</span>
              <span data-filter=".web">Web Design</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div
              className="col-md-6 items mobile lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Duappy</h6>
                  <p>Product Owner</p>
                </div>
                <a className="rota">
                  <img src="/img/portfolio/freelancer/duappy.png" alt="image" style={{ borderRadius: "10px" }} />
                  <div className="item-img-overlay"></div>
                </a>

                <div className="tags">
                  <span>
                    <Link href="https://duappy.com">App</Link>
                  </span>
                  <span>
                    <Link href="https://duappy.com">Social Dance</Link>
                  </span>
                  <span>
                    <Link href="https://duappy.com">Flutter</Link>
                  </span>
                  <span>
                    <Link href="https://duappy.com">B2B2C</Link>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 items mobile lg-mr wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Syndi Health</h6>
                  <p>UX UI Designer</p>
                </div>
                <a className="rota">
                  <img src="/img/portfolio/freelancer/syndi.png" alt="image" style={{ borderRadius: "10px" }} />
                  <div className="item-img-overlay"></div>
                </a>

                <div className="tags">
                  <span>
                    <Link href="https://www.syndi.health">App</Link>
                  </span>
                  <span>
                    <Link href="https://www.syndi.health">B2B</Link>
                  </span>
                  <span>
                    <Link href="https://www.syndi.health">Mental Health</Link>
                  </span>
                  <span>
                    <Link href="https://www.syndi.health">AI</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web-apps wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>The King Prawn</h6>
                  <p>Product Owner</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/kingprawn.png" alt="image" style={{ borderRadius: "10px" }} />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="https://thekingprawn.com">Web App</Link>
                  </span>
                  <span>
                    <Link href="https://thekingprawn.com">Social Cohesion</Link>
                  </span>
                  <span>
                    <Link href="https://thekingprawn.com">B2B</Link>
                  </span>
                  <span>
                    <Link href="https://thekingprawn.com">NodeJs</Link>
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 items web-apps wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Musidex</h6>
                  <p>Product Owner</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/musidex.png" alt="image" style={{ borderRadius: "10px" }} />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="https://musidex.co.uk">Web App</Link>
                  </span>
                  <span>
                    <Link href="https://musidex.co.uk">Content Collaboration</Link>
                  </span>
                  <span>
                    <Link href="https://musidex.co.uk">NodeJs</Link>
                  </span>
                  <span>
                    <Link href="https://musidex.co.uk">B2C</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Cooper & Sons</h6>
                  <p>Web Design</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/cooper.png" alt="image" style={{ borderRadius: "10px" }} />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="https://www.cooperandsons.uk">Web Design</Link>
                  </span>
                  <span>
                    <Link href="https://www.cooperandsons.uk">SEO</Link>
                  </span>
                  <span>
                    <Link href="https://www.cooperandsons.uk">HTML CSS JS</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Zapp World</h6>
                  <p>Web Design</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/zapp.png" alt="image" style={{ borderRadius: "10px" }} />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="https://zappworld.com">Web Design</Link>
                  </span>
                  <span>
                    <Link href="https://zappworld.com">SEO</Link>
                  </span>
                  <span>
                    <Link href="https://zappworld.com">HTML CSS JS</Link>
                  </span>
                </div>
              </div>
            </div>

            <div
              className="col-md-6 items web wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>Mackenzie & Hartley Tools</h6>
                  <p>Ecommerce</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/mackenzie.png" alt="image" style={{ borderRadius: "10px" }} />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="https://www.mackenzieandhartleytools.com/">ECommerce</Link>
                  </span>
                  <span>
                    <Link href="https://www.mackenzieandhartleytools.com/">B2C</Link>
                  </span>

                </div>
              </div>
            </div>

            <div
              className="col-md-6 items brand wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="item-img">
                <div className="cont">
                  <h6>WeConsilium</h6>
                  <p>UX UI Design</p>
                </div>
                <Link href={`/project-details2/project-details2-dark`}>
                  <a className="rota">
                    <img src="/img/portfolio/freelancer/wecon.png" alt="image" style={{ borderRadius: "10px" }} />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="https://weconsilium.uk">App</Link>
                  </span>
                  <span>
                    <Link href="https://weconsilium.uk">InsurTech</Link>
                  </span>
                  <span>
                    <Link href="https://weconsilium.uk">Adobe XD</Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle4;
