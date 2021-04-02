import styled from "styled-components";

const lightPinkColor = `#FFE4E8`;

export const ItemsContainer = styled.div`
  display: flex;
  background-color: var(--primary-color);
  flex-flow: column;
  position: fixed;
  height: 100%;
  width: 100%;
  overflow: auto;
`;

export const ItemHeaderContainer = styled.section`
  /* width: 100vw; */
`;

export const HeaderContentContainer = styled.div`
  position: relative;
  img {
    position: relative;
    width: 100%;
    height: 350px;
    /* z-index: -1; */
  }
  &:before {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    background: #13142054;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
`;

export const HeaderInfoContainer = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.row ? "row" : "column")};
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  margin-top: 1rem;
  z-index: 2;
  color: ${lightPinkColor};

  h1 {
    font-size: 1.8rem;
    text-align: center;
  }
  ul {
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    width: 100%;
    max-width: 100%;
    font-size: 0.9rem;
    font-weight: bold;
    padding: 0 0px;
    li {
      list-style-type: none;
    }
  }
  p {
    margin-top: 2rem;
    width: 320px;
    max-width: 100%;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
  }
  @media only screen and (min-width: 600px) {
    h1 {
      font-size: 2.5rem;
    }
    ul {
      width: 85%;
      font-size: 1.5rem;
      padding: 0 5rem 0 0;
    }
  }
`;
