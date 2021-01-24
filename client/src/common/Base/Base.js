import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-flow: row ${(props) => (props.wrap ? "wrap" : "nowrap")};
`;

export const Column = styled.div`
  display: flex;
  flex-flow: column;
`;

export const Col4 = styled.div`
  flex: 0 0 96%;
`;
export const Col3 = styled.div`
  flex: 0 0 68%;
`;
export const Col2 = styled.div`
  flex: 0 0 44%;
`;
export const Col1 = styled.div`
  flex: 0 0 20%;
`;
