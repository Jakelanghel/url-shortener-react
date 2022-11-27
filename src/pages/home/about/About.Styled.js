import styled from "styled-components";

export const StyledAbout = styled.section`
  width: 100%;
  background-color: var(--light-gray);
  padding: 0 1rem;
  padding-top: 7.5rem;
  padding-bottom: 5rem;

  position: relative;

  h2 {
    text-align: center;
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
    margin: 0 auto;
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
    height: 900px;
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

  @media screen and (min-width: 900px) {
    .line::before {
      height: 7px;
      width: 600px;
      top: 50%;
      left: 8rem;
    }

    .container-about-header {
      h2 {
        font-size: 2.5rem;
        margin-top: 9rem;
      }

      p {
        text-align: center;
      }
    }

    .container-about-body {
      display: flex;
      justify-content: center;
      gap: 1rem;
      padding: 0 3rem;
      max-width: 1400px;
    }

    .container-about {
      width: 200px;
      height: 375px;
      flex: 1;
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
      left: 75px;
    }

    .row-2 {
      margin-top: 9rem;
    }

    .row-3 {
      margin-top: 12rem;
    }
  }

  @media screen and (min-width: 1100px) {
    .container-about-body {
      padding: 0 7rem;
    }

    .line::before {
      width: 700px;
    }

    .container-about {
      width: 200px;
      height: 325px;
      flex: 1;
    }
  }

  @media screen and (min-width: 1300px) {
    .line::before {
      width: 1000px;
    }

    .container-about {
      width: 200px;
      height: 300px;
      flex: 1;
    }
  }
`;
