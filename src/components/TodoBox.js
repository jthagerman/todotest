import React from "react";
import Button from "./Button";
import { InfoBox } from "./styled/TodoStyled";

const TodoBox = (props) => {
  return (
    <InfoBox>
      <div>
        <h1>{props.title}</h1>
        <p>
          hi hi
          {props.text}
        </p>
      </div>

      <Button></Button>
    </InfoBox>
    
  );
};

export default TodoBox;
