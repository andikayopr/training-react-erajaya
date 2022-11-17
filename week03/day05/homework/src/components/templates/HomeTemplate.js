import React from "react";
import PropTypes from "prop-types";
import Navbar from "../organisms/Navbar";
import Footer from "../organisms/Footer";
import Headline from "../organisms/Headline";
import NextMeetup from "../organisms/NextMeetup";
import AboutMeetup from "../organisms/AboutMeetup";
import PastMeetup from "../organisms/PastMeetup";
import Members from "../organisms/Members";

const HomeTemplate = (props) => {
  return (
    <>
      <Navbar></Navbar>
      <div className="container">
        <Headline/>
        <NextMeetup/>
        <AboutMeetup/>
        <Members/>
        <PastMeetup/>
      </div>
      <Footer by="Hactiv8" year="2022"/>
    </>
  );
};

export default HomeTemplate;
