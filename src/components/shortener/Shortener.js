import React, { useState } from "react";
import { StyledShortener } from "../shortener/Shortener.Styled";

const Shortener = () => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <StyledShortener>
      <label htmlFor="shortener form">
        <form action="" onSubmit={handleSubmit} id="shortener form">
          <input
            type="text"
            className="shortener-input"
            value={input}
            onChange={handleChange}
            placeholder="Shorten a link here.."
          />
          <input type="submit" value="shorten it!" className="shortener-btn" />
        </form>
      </label>
    </StyledShortener>
  );
};

export default Shortener;
