import React from "react";
import { UpdatesContainer } from "../styles/Recommendations";
import { DataContainer } from "./ContainerStyles/ContainerStyles";

export const UpdateContainerBuilder = ({ title, data }) => {
  return (
    <UpdatesContainer>
      <h2>{title}</h2>
      <DataContainer center={"center"}>
        {data.map((item, i) => (
          <h4 key={i}>{item.title}</h4>
        ))}
      </DataContainer>
    </UpdatesContainer>
  );
};
