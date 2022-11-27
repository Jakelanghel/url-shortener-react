import styled from "styled-components";

export const StyledShortUrl = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: var(--white);

  padding: 1rem 0;
  border-radius: 5px;
  margin: 0 auto;
  margin-bottom: 1.5rem;

  p {
    width: 100%;
    max-width: 100%;
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

  @media screen and (min-width: 900px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 1200px;
    p {
      /* padding: 0; */
      font-size: 1.1rem;
    }

    .og-url {
      width: 40%;
      border-bottom: none;
      padding-bottom: 0;
      padding: 1rem;
    }

    .short-url {
      width: 30%;
    }

    button {
      font-size: 1.15rem;
      width: 125px;
      padding: 0.75rem 0;
    }
  }
`;
