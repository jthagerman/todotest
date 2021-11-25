import React from "react";
import { InfoBox, StyledTitleBubble } from "./styled/TodoStyled";
import { StyledButton, ButtonHolder, InfoBoxTop } from "./styled/TodoStyled";

const TodoBox = (props) => {
  return (
    <InfoBox>
      <InfoBoxTop>
        <StyledTitleBubble>
          <h1>{props.index + 1}: {props.title}</h1>
        </StyledTitleBubble>

        <p>{props.text}</p>
      </InfoBoxTop>

      <ButtonHolder>
        <StyledButton
          onClick={() => {
            props.move(props.index, "up");
          }}
        >
          Up
        </StyledButton>
        <StyledButton
          onClick={() => {
            props.func(props.index);
          }}
        >
          Delete
        </StyledButton>
        <StyledButton
         onClick={() => {
          props.move(props.index, "down");
        }}
        >
          Down
        </StyledButton>
      </ButtonHolder>
    </InfoBox>
  );
};

export default TodoBox;
