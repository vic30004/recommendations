import React from "react";
import { UpdatesContainer } from "../../styles/Recommendations";
import { DataContainer } from "./ContainerStyles/ContainerStyles";
import {UpdateContainerItems} from './UpdateContainerItems'

export const UpdateContainerBuilder = ({ title, data }) => {
 
  return (
    <UpdatesContainer>
      <h2>{title}</h2>
      <DataContainer center={"center"}>
        {data.map((item) => (
          <UpdateContainerItems title={item.title} id={item.id} userId={item.user_id}/>
        ))}
        
      </DataContainer>
    </UpdatesContainer>
  );
};
