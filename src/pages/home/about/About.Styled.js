import styled from "styled-components";

export const StyledAbout = styled.section`
  width: 100%;
  background-color: var(--light-gray);
  padding-top: 8rem;
  padding-bottom: 5rem;

  position: relative;

  h2 {
    font-size: 1.75rem;
  }

  .container-about {
    max-width: 350px;
    background-color: var(--white);

    padding: 2rem;
    padding-top: 4rem;
    margin: 0 auto;
    margin-top: 6rem;

    border-radius: 7px;
    position: relative;
    z-index: 1;
  }
  .container-about-body:last-child {
    margin: 0;
    position: relative;
  }

  .container-icon {
    width: 85px;
    background: var(--very-dark-blue);

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 50%;
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
  }

  .icon {
    width: 100%;
    padding: 1.5rem;
  }

  .line::before {
    content: "";
    width: 7px;
    height: 1000px;
    background-color: var(--cyan);

    position: absolute;
    top: 0;
    z-index: 0;
  }

  p {
    font-size: 1rem;
  }

  .container-shorts {
    margin-bottom: 5rem;
  }
`;
