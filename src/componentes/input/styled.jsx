import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
 
  max-width: 414px;
  width: 443px;
  left: 442px; 
  top: 400px;

  
  @media (max-width: 768px) {
    max-width: 90%;
    left: 5%;
    top: 200px;
  }
`;

export const Input = styled.input`
  width: 100%;
  font-size: 16px;
  border-radius: 5px;
  border: 1px solid #34ac40;
  outline: none;
  height: 32px;
  padding: 5px 10px;

  &:focus {
    border-color: #34ac40;
  }

  @media (max-width: 1366px) {
    height: 30px;
    font-size: 14px;
  }

  @media (max-width: 768px) {
    height: 28px;
    font-size: 14px;
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 10px;
  cursor: pointer;
  color: #34ac40;
  font-size: 18px;
  display: flex;
  align-items: center;

  &:hover {
    color: #58ff8f;
  }

  @media (max-width: 1366px) {
    font-size: 16px;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
