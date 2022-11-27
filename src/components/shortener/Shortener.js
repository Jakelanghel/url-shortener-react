import React from "react";
import { StyledShortener } from "../shortener/Shortener.Styled";
import { Context } from "../../Context";

const Shortener = () => {
  const { handleChange, handleSubmit, input, error } =
    React.useContext(Context);
  return (
    <StyledShortener>
      <label htmlFor="shortener-form">
        <form action="" onSubmit={handleSubmit} id="shortener form">
          <input
            type="text"
            value={input}
            onChange={handleChange}
            placeholder="Shorten a link here.."
            className={error ? "shortener-input error" : "shortener-input"}
            id="shortener-form"
          />
          {error ? <span className="error-txt">Please add a link</span> : null}
          <input
            type="submit"
            value="shorten it!"
            className="shortener-btn"
            onClick={handleSubmit}
          />
        </form>
      </label>
    </StyledShortener>
  );
};

export default Shortener;
