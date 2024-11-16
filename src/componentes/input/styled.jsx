import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 300px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px 40px 10px 10px;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #ccc;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #333;
  font-size: 18px;
  display: flex;
  align-items: center;

  &:hover {
    color: #007bff;
  }
`;
