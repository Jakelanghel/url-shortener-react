import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledShortener = styled.div`
  width: 90%;
  background-color: var(--dark-violet);
  background-image: url(${images.mobileShortener});
  background-repeat: no-repeat;
  background-position: right -30px;
  padding: 2rem;
  border-radius: 10px;

  position: absolute;
  top: -85px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  .shortener-input {
    width: 100%;
    font-size: 1rem;
    color: var(--grayish-violet);
    padding: 0.75rem 1rem;
    border: none;
    border-radius: 7px;
    outline: none;
    border: solid 3px transparent;
    position: relative;
  }

  .shortener-btn {
    width: 100%;
    font-size: 1.1rem;
    font-weight: 700;
    color: var(--white);
    text-transform: capitalize;
    padding: 0.5rem 0;
    margin-top: 1rem;
    border-radius: 7px;
    border: none;
    background-color: var(--cyan);
  }

  .input {
    color: var(--very-dark-blue);
  }

  .error {
    border: solid 3px var(--red);
  }

  .error-txt {
    width: 100%;
    display: flex;
    margin-top: 5px;

    font-size: 0.75rem;
    font-style: italic;
    text-align: left;
    color: var(--red);
    opacity: 0.7;
  }
`;
