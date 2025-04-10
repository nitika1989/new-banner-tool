import React from "react";

const CTAButton = ({ link }) => {
  return link ? (
    <a href={link} className="cta-button" target="_blank" rel="noopener noreferrer">
      click me
    </a>
  ) : null;
};

export default CTAButton;
