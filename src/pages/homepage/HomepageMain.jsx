import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import FreelancreIntro from "../../components/Freelancre-intro/freelancre-intro";
import WorksStyle4 from "../../components/Works-style4/works-style4";
import FullTestimonials from "../../components/Full-testimonials/full-testimonials";
import SContactForm from "../../components/s-contact-form/s-contact-form";
import Clients from "../../components/Clients/clients";

const HomepageMain = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <FreelancreIntro />
      {/* <Clients theme="dark" /> */}
      <WorksStyle4 />
      {/* <FullTestimonials showHead /> */}
      {/* <SContactForm noLine /> */}
      <Footer />
    </DarkTheme>
  );
};

export default HomepageMain;
