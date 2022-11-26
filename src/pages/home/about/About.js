import React from "react";
import { images } from "../../../constants/images";
import { Context } from "../../../Context";

import { StyledAbout } from "./About.Styled";
import Shortener from "../../../components/shortener/Shortener";
import ShortUrl from "../../../components/short-url/ShortUrl";

const About = () => {
  const { data } = React.useContext(Context);

  const shortElementsArr = data.map((i) => (
    <ShortUrl ogUrl={i.ogUrl} shortUrl={i.shortUrl} key={i.code} />
  ));

  return (
    <StyledAbout className="side-padding">
      <Shortener />
      {shortElementsArr.length > 0 ? (
        <div className="container-shorts">{shortElementsArr}</div>
      ) : (
        ""
      )}

      <div className="container-about-header">
        <h2 className="title-margin">Advanced Statistics </h2>
        <p>
          Track how your links are performing across the web with our advanced
          statistics dashboard.
        </p>
      </div>
      <div className="container-about-body">
        <div className="container-about">
          <div className="container-icon">
            <img src={images.brandIcon} alt="" className="icon" />
          </div>

          <h3 className="title-margin">Brand Recognition</h3>
          <p>
            Boost your brand recognition with each click. Generic links don’t
            mean a thing. Branded links help instil confidence in your content.
          </p>
        </div>

        <div className="container-about">
          <div className="container-icon">
            <img src={images.recordsIcon} alt="" className="icon" />
          </div>

          <h3 className="title-margin">Detailed Records</h3>
          <p>
            Gain insights into who is clicking your links. Knowing when and
            where people engage with your content helps inform better decisions.
          </p>
        </div>

        <div className="line"></div>

        <div className="container-about">
          <div className="container-icon ">
            <img src={images.customizeIcon} alt="" className="icon" />
          </div>

          <h3 className="title-margin">Fully Customizable</h3>
          <p>
            Improve brand awareness and content discoverability through
            customizable links, supercharging audience engagement.
          </p>
        </div>
      </div>
    </StyledAbout>
  );
};

export default About;
