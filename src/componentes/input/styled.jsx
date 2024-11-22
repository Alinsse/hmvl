import styled from "styled-components";

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 443px;
  margin: 20px auto;
  border: 1px solid #34ac40;
  border-radius: 5px;
  background-color: #fff;
  overflow: hidden;

  @media (max-width: 768px) {
    max-width: 90%;
    margin-top: 20px;
  }
`;

export const Input = styled.input`
  width: 99%;
  font-size: 16px;

  outline: none;
  height: 36px;

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
  cursor: pointer;
  color: #34ac40;
  font-size: 18px;
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  justify-content: center;
  margin: -39px;

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
