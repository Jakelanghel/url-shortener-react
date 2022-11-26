import styled from "styled-components";

export const StyledShortUrl = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  background: var(--white);

  padding: 1rem 0;
  border-radius: 5px;
  margin-bottom: 1.5rem;

  p {
    width: 100%;
    font-size: 1rem;
    text-align: left;
    padding: 0 1rem;
  }

  .og-url {
    white-space: nowrap;
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    color: var(--very-dark-violet);
    padding-bottom: 1rem;
    border-bottom: solid 1px var(--light-gray);
  }

  .short-url {
    color: var(--cyan);
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  button {
    width: 90%;
    margin: 0 auto;
    font-size: 1rem;
    font-weight: 700;
    text-transform: capitalize;
    color: var(--white);
    background: var(--cyan);

    border: none;
    border-radius: 5px;
    padding: 0.5rem 0;
  }
`;
