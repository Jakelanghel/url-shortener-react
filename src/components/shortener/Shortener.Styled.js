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
  bottom: -85px;
  left: 50%;
  transform: translateX(-50%);

  .shortener-input {
    width: 100%;
    font-size: 1.15rem;
    color: var(--grayish-violet);
    padding: 0.5rem;
    border: none;
    border-radius: 7px;
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
`;
