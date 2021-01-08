import styled from "styled-components";

const mainStyles = (row, direction, center) => {
  return `
    display:flex;
    flex-flow:${row ? "row" : "column"};
    justify-content:${direction};
    align-items:${center || "flex-start"};
    `;
};

export const DataContainer = styled.div`
  display: flex;
  flex-flow: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => props.direction};
  align-items: ${(props) => props.center || "flex-start"};
  color: var(--secondary-color);
  font-size: 1.2rem;
  font-weight: bold;
  font-style: var(--header-font);
  text-transform: capitalize;
  h4 {
    margin-top: 0.5rem;
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;
