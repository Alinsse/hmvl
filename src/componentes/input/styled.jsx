import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 350px;
  left: 354px;
  top: 73px;;
`;

export const Input = styled.input`
  width: 100%;
  
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #34AC40;

  outline: none;
  height: 32px;
  

  &:focus {
    border-color:#34AC40;
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #34AC40;
  font-size: 18px;
  display: flex;
  align-items: center;

  &:hover {
    color: #58ff8f;
  }
`;
