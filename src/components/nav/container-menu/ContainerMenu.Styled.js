import styled from "styled-components";

export const StyledContainerMenu = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 35px;
  left: 0;
  z-index: 1000;
  padding: 1rem 0;
  border-radius: 10px;
  background: var(--nav-bg);

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
    /* margin-bottom: 0.5rem; */
  }

  .nav-btn {
    background-color: var(--cyan);
    border: none;
    border-radius: 75px;
    padding: 0.75rem 0;
    margin-bottom: 1rem;
  }
`;
