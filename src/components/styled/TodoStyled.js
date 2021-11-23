import styled from "styled-components";

export const InfoBox = styled.div`
  max-width: 400px;
  min-width: 400px;
  min-height: 150px;
  background-color: #101522;
  margin: 20px 20px;

  display: flex;

  text-align: center;
  color: white;

  h1 {
    color: white;
    font-weight: 900;
    margin: 5px 0px;
  }
  p {
    text-align: left;
    margin: 0px 10px 10px 10px;
  }
`;

export const StyledButton = styled.button`
  background: #4b59f7;
  white-space: nowrap;
  padding: 10px 40px;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  color: #fff;

  &:hover {
    transition: all 0.3s ease-out;
    background: #0467fb;
  }
`;
