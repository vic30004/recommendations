import styled from "styled-components";
import { Col4, Row } from "../Base/Base";

export const Card = styled.div`
  grid-auto-columns: auto;
  height: 350px;
  border-radius: 10px;
  display: flex;
  flex-flow: column;
  position: relative;
  align-items: center;
  background-color: var(--primary-color);
  color: var(--light-primary-color);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
    0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
    0 16px 16px rgba(0, 0, 0, 0.12);
  transition: all 0.2s ease-in-out;

  .picture-container {
    height: 291px;
    position: relative;
    width: 100%;
    display: flex;
  }
  img {
    width: 100%;
    height: 291px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    transition: all 0.8s ease-in-out;
    z-index: 2;
  }

  .description {
    padding: 0 0.5rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.8s ease-in;
    overflow: auto;
    height: 155px;
    opacity: 0;
    z-index: 1;
    font-size: 1.2rem;
    background: var(--primary-color);
  }
  &:hover {
    /* width: 273.913px; */

    img {
      width: 100px;
      height: 100px;
      border-top-left-radius: 0px;
      border-top-right-radius: 0px;
      justify-self: flex-start;
    }
    .description {
      display: block;
      transform: translateY(70%);
      opacity: 1;
    }
  }

  &:hover {
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.12), 0 6px 6px rgba(0, 0, 0, 0.12),
      0 8px 8px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
      0 16px 16px rgba(0, 0, 0, 0.12);
    transform: translateY(-3px);
  }

  @media only screen and (max-width: 600px) {
    margin: 1rem;
  }
`;

export const TitleContainer = styled(Row)`
  margin: 4%;
  width: 100%;
  text-align: center;
  padding-right: 1%;
  position: relative;

  span {
    cursor: pointer;
    position: relative;
    &:hover + .drop-down {
      display: block;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
        0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
        0 16px 16px rgba(0, 0, 0, 0.12);
      z-index: 100;
      transform: translateY(-3px);
    }
  }
  .drop-down {
    position: absolute;
    display: none;
    top: 76%;
    right: -15%;
    z-index: 100;
    background: var(--primary-color);
    color: var(--light-primary-color);
    border-radius: 10px;
    padding: 0.5rem 1rem;
    transition: all 0.5s ease-in;
    box-shadow: none;
    &:hover {
      display: block;
      z-index: 100;
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12),
        0 4px 4px rgba(0, 0, 0, 0.12), 0 8px 8px rgba(0, 0, 0, 0.12),
        0 16px 16px rgba(0, 0, 0, 0.12);
      transform: translateY(-3px);
    }
    ul {
      text-align: left;
      padding: 0;
      transition: all 0.5s ease-in;
      li {
        margin-bottom: 0.5rem;
        list-style-type: none;
        cursor: pointer;
        font-weight: bold;
        transition: all 1s ease;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
`;

export const CardTitle = styled(Col4)`
  font-size: 1.2rem;
  font-weight: bold;
`;
