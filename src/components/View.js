import React from "react";
import { useState } from "react";

import { data } from "../data.js";
import TodoBox from "./TodoBox";
import { Container } from "./styled/TodoStyled.js";
import Entry from "./Entry";

const View = () => {
  const [tasks, setTasks] = useState(data);

  const del = (index) => {
    setTasks([...tasks.slice(0, index), ...tasks.slice(index + 1)]);
  };

  const add = (element) => {
    setTasks([...tasks, element]);
  };

  const move = (index, pos) => {
    if (pos === "up") {
      if (index >= 1 && index <= tasks.length - 1) {
        let copy = tasks.slice();
        copy[index] = tasks[index - 1];
        copy[index - 1] = tasks[index];
        setTasks(copy);
      }
    } else if (index < tasks.length - 1 && pos === "down") {
        let copy = tasks.slice();
        copy[index] = tasks[index + 1];
        copy[index + 1] = tasks[index];
        setTasks(copy);
    }
  };

  return (
    <Container>
      <div>
        {tasks.map((element, index) => {
          return (
            <TodoBox
              key={index}
              index={index}
              title={element.title}
              text={element.text}
              func={del}
              move={move}
            />
          );
        })}
      </div>
      <Entry func={add}></Entry>
    </Container>
  );
};

export default View;
