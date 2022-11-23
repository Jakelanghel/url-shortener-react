import styled from "styled-components";
import { images } from "../../../constants/images";

export const StyledCta = styled.div`
  width: 100%;
  padding: 5rem 2rem;
  background-color: var(--dark-violet);
  background-image: url(${images.mobileBoostBg});
  background-position: left -20px;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--white);
    margin: 0;
    padding: 0;
  }

  .btn {
    margin-top: 1rem;
  }
`;
