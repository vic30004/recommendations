import { GET_USER } from "../../graphql";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

export const UpdateContainerItems = ({ id, title, userId }) => {
  const { data, loading, error } = useQuery(GET_USER, {
    variables: { id: userId },
  });
  console.log(data);
  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <h4>
          {data ? <Link to={`/${id}/${data.user.username}`}>{title}</Link> : ""}
        </h4>
      )}
    </>
  );
};
