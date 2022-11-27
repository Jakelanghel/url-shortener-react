import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: var(--very-dark-violet);

  .container-footer-logo {
    display: flex;
    justify-content: center;
    align-self: center;
  }

  .logo {
    padding: 1rem;

    filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(38deg)
      brightness(115%) contrast(100%);
  }

  ul {
    list-style: none;
  }

  ul {
    margin-bottom: 3rem;
  }

  li {
    margin-bottom: 0.75rem;
  }

  a:hover {
    color: var(--cyan);
  }

  .title {
    font-size: 1.15rem;
    font-weight: 700;
    text-transform: capitalize;
    color: var(--white);
    margin-bottom: 1rem;
  }

  a {
    text-decoration: none;
    color: var(--grayish-violet);
  }

  .container-social-links {
    width: 200px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    padding-bottom: 2rem;
  }

  img {
    padding: 0.75rem;
  }

  @media screen and (min-width: 900px) {
    display: flex;
    justify-content: space-between;
    padding: 5rem 2rem;

    .container-footer-logo {
      padding: 0;
      margin: 0;
      align-self: flex-start;
    }

    .container-footer-links {
      display: flex;
      justify-content: space-between;
      gap: 2rem;
    }

    ul {
      padding-top: 1rem;
      margin: 0;
    }

    .container-social-links {
      width: 200px;
      margin: 0;
      padding: 0;
      padding-top: 1rem;
    }

    .footer-flex-item__padding-top {
      padding-top: 1rem;
    }
  }

  @media screen and (min-width: 1200px) {
    padding: 5rem 7rem;

    .container-footer-links {
      gap: 5rem;
    }
  }
`;
