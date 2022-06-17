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
                <a className="rota" href="https://duappy.com" target="_blank">
                  <img src="/img/portfolio/freelancer/duappy.png" alt="image" style={{ borderRadius: "10px" }} />
                  <div className="item-img-overlay"></div>
                </a>

                <div className="tags">
                  <span>
                    <Link href="https://duappy.com" target="_blank">App</Link>
                  </span>
                  <span>
                    <Link href="https://duappy.com" target="_blank">Social Dance</Link>
                  </span>
                  <span>
                    <Link href="https://duappy.com" target="_blank">Flutter</Link>
                  </span>
                  <span>
                    <Link href="https://duappy.com" target="_blank">B2B2C</Link>
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
                <a className="rota" href="https://www.syndi.health" target="_blank">
                  <img src="/img/portfolio/freelancer/syndi.png" alt="image" style={{ borderRadius: "10px" }} />
                  <div className="item-img-overlay"></div>
                </a>

                <div className="tags">
                  <span>
                    <Link href="https://www.syndi.health" target="_blank">App</Link>
                  </span>
                  <span>
                    <Link href="https://www.syndi.health" target="_blank">B2B</Link>
                  </span>
                  <span>
                    <Link href="https://www.syndi.health" target="_blank">Mental Health</Link>
                  </span>
                  <span>
                    <Link href="https://www.syndi.health" target="_blank">AI</Link>
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
                <Link href="https://thekingprawn.com" target="_blank">
                  <a className="rota" href="https://thekingprawn.com" target="_blank">
                    <img src="/img/portfolio/freelancer/kingprawn.png" alt="image" style={{ borderRadius: "10px" }} />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="https://thekingprawn.com" target="_blank">Web App</Link>
                  </span>
                  <span>
                    <Link href="https://thekingprawn.com" target="_blank">Social Cohesion</Link>
                  </span>
                  <span>
                    <Link href="https://thekingprawn.com" target="_blank">B2B</Link>
                  </span>
                  <span>
                    <Link href="https://thekingprawn.com" target="_blank">NodeJs</Link>
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
                <Link href="https://musidex.co.uk" target="_blank">
                  <a className="rota" href="https://musidex.co.uk" target="_blank">
                    <img src="/img/portfolio/freelancer/musidex.png" alt="image" style={{ borderRadius: "10px" }} />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="https://musidex.co.uk" target="_blank">Web App</Link>
                  </span>
                  <span>
                    <Link href="https://musidex.co.uk" target="_blank">Content Collaboration</Link>
                  </span>
                  <span>
                    <Link href="https://musidex.co.uk" target="_blank">NodeJs</Link>
                  </span>
                  <span>
                    <Link href="https://musidex.co.uk" target="_blank">B2C</Link>
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
                <Link href="https://www.cooperandsons.uk" target="_blank">
                  <a className="rota" href="https://www.cooperandsons.uk" target="_blank">
                    <img src="/img/portfolio/freelancer/cooper.png" alt="image" style={{ borderRadius: "10px" }} />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="https://www.cooperandsons.uk" target="_blank">Web Design</Link>
                  </span>
                  <span>
                    <Link href="https://www.cooperandsons.uk" target="_blank">SEO</Link>
                  </span>
                  <span>
                    <Link href="https://www.cooperandsons.uk" target="_blank">HTML CSS JS</Link>
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
                <Link href="https://zappworld.com" target="_blank">
                  <a className="rota" href="https://zappworld.com" target="_blank">
                    <img src="/img/portfolio/freelancer/zapp.png" alt="image" style={{ borderRadius: "10px" }} />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="https://zappworld.com" target="_blank">Web Design</Link>
                  </span>
                  <span>
                    <Link href="https://zappworld.com" target="_blank">SEO</Link>
                  </span>
                  <span>
                    <Link href="https://zappworld.com" target="_blank">HTML CSS JS</Link>
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
                <Link href="https://www.mackenzieandhartleytools.com/" target="_blank">
                  <a className="rota" href="https://www.mackenzieandhartleytools.com/" target="_blank">
                    <img src="/img/portfolio/freelancer/mackenzie.png" alt="image" style={{ borderRadius: "10px" }} />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="https://www.mackenzieandhartleytools.com/" target="_blank">ECommerce</Link>
                  </span>
                  <span>
                    <Link href="https://www.mackenzieandhartleytools.com/" target="_blank">B2C</Link>
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
                <Link href="https://weconsilium.uk" target="_blank">
                  <a className="rota" href="https://weconsilium.uk" target="_blank">
                    <img src="/img/portfolio/freelancer/wecon.png" alt="image" style={{ borderRadius: "10px" }} />
                    <div className="item-img-overlay"></div>
                  </a>
                </Link>
                <div className="tags">
                  <span>
                    <Link href="https://weconsilium.uk" target="_blank">App</Link>
                  </span>
                  <span>
                    <Link href="https://weconsilium.uk" target="_blank">InsurTech</Link>
                  </span>
                  <span>
                    <Link href="https://weconsilium.uk" target="_blank">Adobe XD</Link>
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
