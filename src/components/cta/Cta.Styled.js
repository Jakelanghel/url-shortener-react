import styled from "styled-components";
import { images } from "../../constants/images";

export const StyledCta = styled.div`
  width: 100%;
  padding: 5rem 2rem;
  background-color: var(--dark-violet);
  background-image: url(${images.mobileBoostBg});
  background-size: cover;
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

  @media screen and (min-width: 900px) {
    background-image: url(${images.desktopBoostBg});

    p {
      font-size: 2.25rem;
    }
  }
`;
