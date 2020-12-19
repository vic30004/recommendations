import styled from "styled-components";

export const ContentSection = styled.section`
  width: 100%;
  font-family: var(--header-font);
  p {
    text-align: center;
    width: 85%;
    margin: 0 auto;
    line-height: 1.5;
    word-spacing: 1.5px;
    cursor: pointer;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  align-items: center;
  margin: 0 auto;
`;
