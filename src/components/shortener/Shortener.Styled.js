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
  max-width: 1200px;
  margin: 0 auto;

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

  .shortener-btn:hover {
    opacity: 0.5;
  }
  .input {
    color: var(--very-dark-blue);
  }

  .error {
    border: solid 3px var(--red);
    color: var(--red);
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

  @media screen and (min-width: 900px) {
    background-image: url(${images.desktopShortener});
    background-repeat: no-repeat;
    background-position: right top;
    padding: 3rem;

    form {
      width: 100%;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .shortener-input {
      font-size: 1.25rem;
      position: relative;
      width: 75%;
    }

    .shortener-btn {
      font-size: 1.15rem;
      margin: 0;
      padding: 0;
      width: 20%;
      min-height: 100%;
    }

    .error-txt {
      position: absolute;
      top: 115px;
      font-size: 0.95rem;
    }
  }
`;
