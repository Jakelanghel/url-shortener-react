import styled from "styled-components";

export const StyledContainerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .nav-left,
  .nav-right {
    width: 85%;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    padding: 0.25rem 0;
  }

  .nav-left {
    margin: 0 1rem;
    border-bottom: solid 2px rgba(79, 69, 104, 1);
  }

  .nav-item {
    font-size: 1.15rem;
    font-weight: 700;
    text-transform: capitalize;
    color: var(--white);
    text-decoration: none;
    padding: 1rem 0;
  }

  .nav-item:hover {
    cursor: pointer;
  }

  .nav-left {
    .nav-item:hover {
      color: var(--black);
    }
  }

  .nav-btn:hover {
    opacity: 0.5;
  }

  .login-btn {
    background-color: transparent;
    border: none;
  }

  .login-btn:hover {
    color: var(--black);
  }

  .nav-btn {
    background-color: var(--cyan);
    border: none;
    border-radius: 75px;
    padding: 0.75rem 0;
    margin-bottom: 1rem;
  }

  @media screen and (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    padding-left: 3rem;

    .nav-left,
    .nav-right {
      flex-direction: row;
      align-items: center;
      gap: 1.5rem;
    }

    .nav-left {
      width: 40%;
      justify-content: flex-start;
      border: none;
    }
    .nav-right {
      width: 40%;
      justify-content: flex-end;
      padding: 0;
    }

    .nav-item {
      color: var(--grayish-violet);
      padding: 1rem;
    }

    .nav-btn {
      color: var(--white);
      padding: 0.75rem 2rem;
    }
  }
`;
