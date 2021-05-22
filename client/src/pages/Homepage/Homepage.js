import { Main } from "../../styles/Homepage";
import { BorderContainer } from "../../components/Homepage";
import { useHistory } from "react-router-dom";

const Homepage = () => {
  let history = useHistory();

  if (localStorage["token"]) {
    history.push("/recommendations");
  }
  return (
    <Main>
      <BorderContainer />
    </Main>
  );
};

export default Homepage;
