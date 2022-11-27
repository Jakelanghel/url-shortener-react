import styled from "styled-components";

export const StyledHero = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  padding-bottom: 8rem;

  .container-hero-img {
    width: 100%;
    order: 1;
  }

  .hero-img {
    /* width: 500px;
    width: 155%; */
    max-width: 600px;
  }

  .container-hero-copy {
    order: 2;
    margin: 1rem 0;
  }

  h1 {
    max-width: 400px;
    margin-left: auto;
    margin-right: auto;
    font-size: 2.65rem;
    font-weight: 700;
    line-height: 2.75rem;
  }

  .btn {
    margin: 2rem 0;
  }

  .hidden {
    opacity: 0;
  }

  @media screen and (min-width: 500px) {
    .hero-img {
      margin: 0 auto;
    }
  }

  @media screen and (min-width: 900px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 0 3rem;
    padding-top: 3rem;
    padding-bottom: 10rem;

    .container-hero-img {
      width: 45%;
    }

    .hero-img {
    }

    .container-hero-copy {
      margin: 1rem 0;
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-top: 2rem;
    }

    h1 {
      max-width: 400px;
      text-align: left;
      margin: 1rem 0;
    }

    p {
      text-align: left;
      max-width: 500px;
      margin: 0;
    }

    .container-hero-img {
      margin: 0;
    }
  }
`;
