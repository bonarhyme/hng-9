import React from "react";
import { I4G, ZuriInternship } from "../data/images";

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <img src={ZuriInternship} alt="Zuri internship logo" />
      </div>
      <div>HNG Internship 9 Frontend Task</div>
      <div>
        <img src={I4G} alt="Ingressive logo" />
      </div>
    </footer>
  );
};

export default Footer;
