import styled from "styled-components";

export const Card = styled.div`
  width: 301px;
  height: 350px;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  align-items: center;
  background-color: #fff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
  transition: all 0.2s ease-in-out;
  img {
    width: 100%;
    height: 291px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 6px 6px rgba(0, 0, 0, 0.12),
      0 8px 8px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-3px);
  }
`;
