import styled from "styled-components";

const BtnMain = styled.button`
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
  padding: 1rem 2rem;
  &,
  &:active,
  &:focus,
  &:hover {
    border: 0;
    outline: none;
  }

  color: ${(props) => props.theme.colorWhite};
  background: ${(props) => props.theme.colorBlack};
  border-radius: 0.5rem;

  &:hover {
    background: ${(props) => props.theme.colorBlue};
  }
`;

export default BtnMain;
