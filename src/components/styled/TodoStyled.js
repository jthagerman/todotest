import styled from "styled-components";

export const InputBox = styled.div`
  width: 400px;
  border-radius: 30px;
  height: 340px;
  background-color: #101522;
  margin: 20px 20px;
  font-family: "Lato", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  color: white;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 95%;
  }

  textarea {
    color: black;
    font-family: "Lato", sans-serif;
    margin: 10px 30px 10px 30px;
    width: 90%;
    border-radius: 25px;
    padding: 10px;
    font-size: 16px;
    height: 200px;
    border: none;
    outline: none;
    resize: none;
  }
`;

export const InfoBox = styled.div`
  max-width: 500px;
  min-width: 200px;
  border-radius: 30px;

  background-color: #101522;
  margin: 20px 20px;
  font-family: "Lato", sans-serif;

  display: flex;
  flex-direction: column;
  align-items: center;

  text-align: center;
  color: white;

  p {
    text-align: left;
    margin: 10px 20px 10px 20px;
  }
`;

export const InfoBoxTop = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  p {
    width: 90%;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledButton = styled.button`
  background: #4b59f7;

  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;
  text-align: center;
  width: 120px;
  padding: 10px 15px;
  margin: 0px 0px 10px 0px;
  border-radius: 999px;
  margin: 0px 5px 10px 5px;

  &:hover {
    transition: all 0.3s ease-out;
    background: #0467fb;
  }
`;

export const StyledTitleBubble = styled.div`
  margin-top: 10px;
  background-color: #fff;
  color: black;
  font-color: black;
  border-radius: 55px;
  width: 95%;
  text-align: center;

  h1 {
    color: black;
    font-weight: 900;
    margin: 5px 0px;
    font-size: 1.5em;
    font-family: "Lato", sans-serif;
  }

  input {
    color: black;
    font-size: 1.5em;
    font-family: "Lato", sans-serif;
    font-weight: 900;
    padding: 5px 0px;
    border: none;
    outline: none;
    width: 90%;
  }
`;

export const ButtonHolder = styled.div`
display: flex;
  flex-direction: row;

`;
