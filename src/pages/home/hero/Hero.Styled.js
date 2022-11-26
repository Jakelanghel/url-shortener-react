import styled from "styled-components";

export const StyledHero = styled.main`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  padding-bottom: 8rem;

  .container-hero-img {
    width: 100%;
    order: 1;
  }

  .hero-img {
    width: 500px;
    width: 155%;
    max-width: 700px;
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

  @media screen and (min-width: 900px) {
    flex-direction: row-reverse;

    .container-hero-copy {
      margin: 1rem 0;
    }

    h1 {
      text-align: left;
    }

    p {
      text-align: left;
    }

    .btn {
      align-self: flex-end;
    }
    .container-hero-img {
      width: 100%;
    }
  }
`;
