import React from "react";
import { StyledShortUrl } from "./ShortUrl.Styled";

const ShortUrl = (props) => {
  return (
    <StyledShortUrl>
      <p className="og-url">{props.ogUrl}</p>
      <p className="short-url">{`https://${props.shortUrl}`}</p>
      <button>copy</button>
    </StyledShortUrl>
  );
};

export default ShortUrl;
