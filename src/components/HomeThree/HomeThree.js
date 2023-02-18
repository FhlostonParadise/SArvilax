import React from "react";
import Brands from "../common/Brands/Brands";
import Footer from "../common/Footer/Footer";
import FooterThree from "../common/Footer/FooterThree";
import FullScreenBtn from "../common/FullScreenBtn";
import Menu from "../common/Menu/Menu";
import Team from "../common/Team/Team";
import Testimonial from "../common/Testimonial/Testimonial";
import AboutThree from "./AboutThree";
import BlogThree from "./BlogThree";
import CategoryThree from "./CategoryThree";
import ContactThree from "./ContactThree";
import PortfolioThree from "./PortfolioThree";
import Promotion from "./Promotion";
import SliderHomeThree from "./SliderHomeThree";
import TeamDetailsHero from "../Pages/TeamDetails/TeamDetailsHero";
import FAQBanner from "../Pages/FAQ/FaqBanner";
import Accordion from "../Pages/FAQ/Accordion";
import TopCtaAreaTwo from "../HomeTwo/TopCtaAreaTwo";

const HomeThree = () => {
  return (
    <>
      <Menu header_style_2={true} />
      <SliderHomeThree />
      <AboutThree />
      
      <Testimonial />
      <FAQBanner/>
      <Accordion />
      <TopCtaAreaTwo />
      <BlogThree />
      <ContactThree />
      <FooterThree />
    </>
  );
};

export default HomeThree;
