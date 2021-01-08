import styled from "styled-components";

export const AddSectionContainer = styled.aside`
  background: #fff;
  height: 70px;
  display: flex;
  justify-content: center;
  padding: 0.75rem 1rem;
  align-items: center;
  border-radius: 5px;
  position: sticky;
  cursor: pointer;
  top: 20px;
  left: 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);

  font-family: var(--header-font);
  font-size: 1rem;
  font-weight: bold;

  #small {
    display: none;
  }

  @media only screen and (max-width: 1140px) {
    position: fixed;
    top: initial;
    left: initial;
    bottom: 20px;
    right: 20px;
    z-index: 12;
    border-radius: 50%;
    width: 25px;
    height: 30px;
    background: var(--third-color);
    #large {
      display: none;
    }
    #small {
      display: block;
    }
  }
`;

export const AddWrapper = styled.div`
  display: flex;
  flex-flow: column;
  max-width: 100%;
  width: 500px;
  background: var(--primary-color);
  box-shadow: -3px 5px 10px #333;
  border-radius: 10px;
  text-align: center;
  color: var(--light-primary-color);
  padding: 2rem 1rem;
  .top-container {
    display: flex;
    flex-flow: column;
    & > h3 {
      text-align: right;
      padding-right: 1rem;
      margin: 0;
      cursor: pointer;
    }
  }
`;
