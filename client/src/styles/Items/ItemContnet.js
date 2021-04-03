import styled from "styled-components";

export const ItemContentContainer = styled.div`
  padding: 0rem 0%;
  margin: 2rem auto;
  max-width: 100%;
  width: 95%;
  min-width: 300px;
  display: grid;
  /* margin-bottom: 2rem; */
  grid-template-columns: repeat(1, 1fr);
  @media only screen and (min-width: 600px) {
    grid-gap: 2%;
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (min-width: 875px) {
    grid-gap: 2%;
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1200px) {
    grid-gap: 3%;
    grid-template-columns: repeat(4, 1fr);
  }
`;
