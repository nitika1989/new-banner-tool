import React, { useState } from "react";
import html2canvas from "html2canvas";
import { motion } from "framer-motion";
import "../styles/banner.css";

const Banner = () => {
  const [bannerText, setBannerText] = useState("Welcome to MediaWiki Banner Tool");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [fontFamily, setFontFamily] = useState("Arial");
  const [fontSize, setFontSize] = useState("20px");
  const [textAlign, setTextAlign] = useState("center");
  const [width, setWidth] = useState(80);
  const [height, setHeight] = useState(300);
  const [borderRadius, setBorderRadius] = useState(10);
  const [image, setImage] = useState(null);
  const [animation, setAnimation] = useState("fadeIn");

  const animationOptions = {
    fadeIn: { opacity: [0, 1] },
    fadeOut: { opacity: [1, 0] },
    slideIn: { x: [-100, 0] },
    blink: { opacity: [1, 0, 1] },
  };

  // Handle Image Upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  // Download the banner as an image
  const downloadBanner = async () => {
    const bannerElement = document.querySelector(".banner-preview");
    if (!bannerElement) {
      console.error("Banner element not found!");
      return;
    }
    try {
      const canvas = await html2canvas(bannerElement);
      const link = document.createElement("a");
      link.download = "custom-banner.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (error) {
      console.error("Error capturing banner:", error);
    }
  };

  return (
    <div className="container">
      <h1>MediaWiki Banner Customizer</h1>

      {/* Animated Banner */}
      <motion.div
        className="banner-preview"
        style={{
          backgroundColor: bgColor,
          color: textColor,
          fontFamily: fontFamily,
          fontSize: `${fontSize}px`,
          textAlign,
          width: `${width}%`,
          height: `${height}px`,
          borderRadius: `${borderRadius}px`,
          display: "flex",
          alignItems: "center",
          justifyContent: textAlign === "center" ? "center" : textAlign === "right" ? "flex-end" : "flex-start",
          padding: "10px",
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {image && <img src={image} alt="Banner" className="banner-image" />}
        <p>{bannerText}</p>
      </motion.div>

      {/* Compact Form */}
      <form className="banner-form">
        <label>Banner Text:</label>
        <input type="text" value={bannerText} onChange={(e) => setBannerText(e.target.value)} />

        <label>Background Color:</label>
        <input type="color" value={bgColor} onChange={(e) => setBgColor(e.target.value)} />

        <label>Text Color:</label>
        <input type="color" value={textColor} onChange={(e) => setTextColor(e.target.value)} />

        <label>Font Family:</label>
        <select value={fontFamily} onChange={(e) => setFontFamily(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Courier New">Courier New</option>
          <option value="Georgia">Georgia</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Verdana">Verdana</option>
        </select>

        <label>Font Size:</label>
        <input type="range" min="16" max="40" value={fontSize} onChange={(e) => setFontSize(e.target.value)} />
        <span>{fontSize}px</span>

        <label>Text Alignment:</label>
        <select value={textAlign} onChange={(e) => setTextAlign(e.target.value)}>
          <option value="left">Left</option>
          <option value="center">Center</option>
          <option value="right">Right</option>
        </select>

        <label>Width:</label>
        <input type="range" min="50" max="100" value={width} onChange={(e) => setWidth(e.target.value)} />
        <span>{width}%</span>

        <label>Height:</label>
        <input type="range" min="200" max="600" value={height} onChange={(e) => setHeight(e.target.value)} />
        <span>{height}px</span>

        <label>Border Radius:</label>
        <input type="range" min="0" max="50" value={borderRadius} onChange={(e) => setBorderRadius(e.target.value)} />
        <span>{borderRadius}px</span>

        <label>Animation:</label>
        <select onChange={(e) => setAnimation(e.target.value)}>
          <option value="fadeIn">Fade In</option>
          <option value="fadeOut">Fade Out</option>
          <option value="slideIn">Slide In</option>
          <option value="blink">Blink</option>
        </select>

        <label>Upload Image:</label>
        <input type="file" onChange={handleImageUpload} />

        <button type="button" onClick={downloadBanner}>Download Banner</button>
      </form>
    </div>
  );
};

export default Banner;
