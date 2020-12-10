import styled from "styled-components";

export const IntroContainer = styled.section`
  display: flex;
  flex-flow: column;
  padding: 1rem;
  width: 60%;
  flex: 2 1;
  background: url("https://res.cloudinary.com/dawyijhjw/image/upload/c_limit,dpr_auto,f_auto,fl_progressive,q_auto,w_auto/v1607446380/recommendation/Slice_4_twvz8d.webp")
    left center/cover no-repeat;

  h1 {
    font-family: var(--logo-font);
    color: #626bc7;
    font-weight: bolder;
    letter-spacing: 1px;
    margin-left: 2rem;

    span {
      color: #dd7291;
    }
  }
  @media only screen and (max-width: 440px) {
    height: 200px;
    width: 91%;
  }
`;

export const PhotoContainer = styled.section`
  height: 80%;
  display: flex;
  flex-flow: column nowrap;
  align-content: center;
  width: 80%;
  justify-content: center;
  margin-left: 27%;
  text-align: center;

  h2 {
    width: 80%;
    font-family: var(--header-font);
    color: var(--primary-color);
    font-weight: regular;
  }
  p {
    width: 80%;
    font-family: var(--header-font);
    margin-top: 0;
    font-size: 18px;
  }
  img {
    width: 80%;
  }
  @media only screen and (max-width: 440px) {
    margin: 0 auto;
    h2 {
      font-size: 16px;
      width: 100%;
    }
    p {
      font-size: 12px;
      width: 100%;
    }
    img {
      display: none;
    }
  }
`;
