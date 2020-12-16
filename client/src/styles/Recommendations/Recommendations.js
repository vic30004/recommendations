import styled from "styled-components";

export const RecommendationContainer = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  width: 50%;
`;

export const MainContainer = styled.section`
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin-top: 2rem;
`;

export const RecommendationCard = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.15), 0 2px 2px rgba(0, 0, 0, 0.15),
    0 4px 4px rgba(0, 0, 0, 0.15), 0 8px 8px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 0.7rem;

  .img-container {
    position: relative;
    img {
      position: relative;
      width: 500px;
    }
    span {
      position: absolute;
      top: 15px;
      left: 15px;
      color: white;
      background: red;
      padding: 0.2rem 0.4rem;
      border-radius: 10px;
      font-weight: bold;
      letter-spacing: 1.2px;
      text-transform: capitalize;
    }
  }
`;
