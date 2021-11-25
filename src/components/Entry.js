import { StyledButton } from "./styled/TodoStyled";
import { InputBox, StyledTitleBubble } from "./styled/TodoStyled";

import React, { useState } from "react";

const Entry = (props) => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  const submit = () => {
    const data = {
      title: title,
      text: text,
    };
    if (title && text) props.func(data);

    setTitle("");
    setText("");
  };

  return (
    <InputBox>
      <div>
        <StyledTitleBubble>
          <input
            type="text"
            maxLength="25"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </StyledTitleBubble>
        <textarea
          maxLength="500"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></textarea>
      </div>
      <StyledButton onClick={() => submit()}>Submit</StyledButton>
    </InputBox>
  );
};

export default Entry;
