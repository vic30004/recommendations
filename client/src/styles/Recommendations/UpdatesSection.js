import styled from "styled-components";

export const UpdatesContainer = styled.div`
  background: var(--primary-100);
  border-radius: 10px;
  width: 260px;
  padding: 1rem 2rem;
  height: 400px;
  position: sticky;
  top: 20px;
  right: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);

  h2 {
    border-bottom: 2px #333 double;
    font-size: 20px;
    font-family: var(--header-font);
  }
  @media only screen and (max-width: 1140px) {
    display: none;
  }
`;
