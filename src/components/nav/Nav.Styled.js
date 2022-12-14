import styled from "styled-components";

export const StyledNav = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 1.5rem;
  padding-top: 1.5rem;
  margin: 0 auto;

  .menu-icon {
    width: 75px;
    padding: 0.5rem;
    padding: 1.5rem;
  }

  .motion-menu {
    width: 90%;

    position: absolute;
    top: 85px;
    z-index: 1000;
    padding: 1rem 0;
    border-radius: 10px;
    background: var(--nav-bg);

    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
  }

  @media screen and (min-width: 900px) {
    padding: 2rem 3rem;

    .logo {
      width: 145px;
    }

    .logo:hover {
      cursor: pointer;
    }

    .menu-icon {
      display: none;
    }

    .motion-menu {
      width: 90%;

      position: static;
      top: 85px;
      z-index: 1000;
      padding: 1rem 0;
      border-radius: 10px;
      background: transparent;

      margin-left: auto;
      margin-right: auto;
      left: 0;
      right: 0;
    }
  }

  @media screen and (min-width: 1100px) {
    padding: 2rem 7rem;
  }
`;
