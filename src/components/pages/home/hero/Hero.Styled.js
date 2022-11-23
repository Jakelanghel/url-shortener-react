import styled from "styled-components";

export const StyledHero = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding-bottom: 8rem;
  position: relative;

  .container-hero-img {
    width: 100%;
    order: 1;
  }

  .hero-img {
    width: 155%;
  }

  .container-hero-copy {
    order: 2;
    margin: 1rem 0;
  }

  h1 {
    font-size: 2.25rem;
    font-weight: 700;
    line-height: 2.75rem;
  }

  .btn {
    margin: 2rem 0;
  }
`;
