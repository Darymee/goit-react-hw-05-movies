import styled from 'styled-components';

export const Form = styled.form`
  overflow: hidden;
  width: 700px;
  display: flex;
  align-items: center;

  margin-bottom: 40px;
`;

export const Input = styled.input`
  height: 46.5px;
  width: 100%;
  background-color: #4d4f57;

  font-weight: 600;
  font-size: 20px;

  padding-left: 15px;

  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;

  color: #ffffff;
  font-weight: 600;
  ::placeholder {
    color: #0b0809;
    font-weight: 600;
  }
  transition: background-color 300ms cubic-bezier(0.23, 1, 0.32, 1);
  &:hover,
  &:focus {
    background-color: #313649;
  }
`;
export const SearchButton = styled.button`
  cursor: pointer;

  /* outline: none; */
  background-color: #4d4f57;
  padding: 10px 20px;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  border: none;
  border-right: 1px solid #0b0809;
  transition: background-color 300ms cubic-bezier(0.23, 1, 0.32, 1);

  &:hover,
  &:focus {
    background-color: #313649;
  }

  & svg {
    width: 25px;
    height: 25px;
  }
`;
