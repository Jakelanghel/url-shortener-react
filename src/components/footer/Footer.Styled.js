import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  background-color: var(--very-dark-violet);

  .container-footer-logo {
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    align-self: center;
  }

  .logo {
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
`;
