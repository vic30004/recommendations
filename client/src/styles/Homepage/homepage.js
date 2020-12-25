import styled from "styled-components";

export const Main = styled.div`
  background: url("https://res.cloudinary.com/dawyijhjw/image/upload/c_limit,dpr_auto,f_auto,fl_progressive,h_900,q_auto,w_1100/v1607408320/recommendation/homeback_ehmung_fdpn3d.webp")
    center center/cover no-repeat;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 440px) {
    height: 100%;
  }
`;
